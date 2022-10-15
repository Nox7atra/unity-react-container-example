import React, {useCallback, useEffect, useState} from "react";
import  {Unity,useUnityContext} from "react-unity-webgl";
import {GameOver} from "../GameOver/GameOver";
import {HUD} from "../HUD/HUD";
import {PausePanel} from "../PausePanel/PausePanel";
import {Onboarding} from "../Onboarding/Onboarding";

export function UnityContainer(){
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPause, setPause] = useState(true);
    const [isShowOnboarding, setOnboarding] = useState(true);
    const { unityProvider, sendMessage, addEventListener, removeEventListener, isLoaded} =
        useUnityContext({
            loaderUrl: "./build/UnityBuild.loader.js",
            dataUrl: "./build/UnityBuild.data.unityweb",
            frameworkUrl: "./build/UnityBuild.framework.js.unityweb",
            codeUrl: "./build/UnityBuild.wasm.unityweb",
        });
    const handleGameOver = useCallback(()=>{
        setIsGameOver(true);
        setPause(true);
    });
    const handleScoreUpdate = useCallback((score)=>{
        setScore(score);
    });

    const handleFloatingText = useCallback((x, y, text)=>{

    });

    useEffect(() => {
        addEventListener("OnGameOver", handleGameOver);
        return () => {
            removeEventListener("OnGameOver", handleGameOver);
        };
    }, [addEventListener, removeEventListener, handleGameOver]);
    useEffect(() => {
        addEventListener("OnScoreUpdate", handleScoreUpdate);
        return () => {
            removeEventListener("OnScoreUpdate", handleScoreUpdate);
        };
    }, [addEventListener, removeEventListener, handleScoreUpdate]);

    useEffect(() => {
        addEventListener("OnFloatingText", handleFloatingText);
        return () => {
            removeEventListener("OnFloatingText", handleFloatingText);
        };
    }, [addEventListener, removeEventListener, handleFloatingText]);

    function handlePauseButton(){
        sendMessage("ReactEventsHandler", "Pause");
        setPause(true);
    }
    function handleResumeButton(){
        sendMessage("ReactEventsHandler", "Resume");
        setPause(false);
    }
    function handleRestartButton() {
        sendMessage("ReactEventsHandler", "Restart");
        setIsGameOver(false);
        setScore(0);
        setTimeout(()=>{
            handleResumeButton();
        }, 100)

    }
    function handleStartButton(){
        handleResumeButton();
        setOnboarding(false);
    }
    return (<div>
        <Unity unityProvider={unityProvider} style={{width: "100vw", height: "100vh", overflow: "hidden", zIndex: 0}}/>
        <HUD score={score} pauseCallback={handlePauseButton}/>
        {isGameOver ? <GameOver score={score} restartCallback={handleRestartButton}/> : ""}
        {isPause ? <PausePanel resumeCallback={handleResumeButton}/> : ""}
        {isShowOnboarding? <Onboarding isActive={!isLoaded} startCallback={handleStartButton}/> : ""}
    </div>);
}
