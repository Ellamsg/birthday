"use client"

import Link from "next/link";
import { useState, useRef } from 'react';
import { useEffect } from 'react'; // Import useEffect hook

import Confetti from 'react-confetti'
const Pagefive = () => {

    const [showConfetti, setShowConfetti] = useState(false); // Set initial state to false

    const [isPlaying, setIsPlaying] = useState(false);
    const [isGlowing, setIsGlowing] = useState(false); // State to control glowing effect
    const audioRef = useRef();

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            if (!showConfetti) {
                setShowConfetti(true); // Show confetti only if it's not already shown
            }
        }
        setIsPlaying(!isPlaying);
        setIsGlowing(true); // Start glowing when clicked
    };

    // Start glowing when music is playing
    useEffect(() => {
        if (isPlaying) {
            setIsGlowing(true);
        } else {
            setIsGlowing(false);
        }
    }, [isPlaying]);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowConfetti(false);
        }, 30000); // 5000 milliseconds = 5 seconds

        return () => clearTimeout(timeout);
    }, [showConfetti]); // Trigger useEffect when showConfetti changes

    return (
        <div>
            {showConfetti && <Confetti className="w-full h-full" />}

            <div className="h-[100vh] p-2 gap-5 flex flex-col justify-center items-center">
                <div>
                    <img className="h-[200px]" src="/images/sarto.jpg" />
                </div>

                <div className="text-center text-[1.4rem]">
                    <p className="">
                       Adding another chapter
                        to the story of your amazing life. May each moment be filled with joy, love,
                        and endless possibilities. Happy Birthday to the girl i love, happy Birthday evelyn !
                    </p>
                </div>

                <div>
                    <audio ref={audioRef} src="/audio/lock.mp3" loop>
                        Your browser does not support the audio element.
                    </audio>

                    <button
                        className={`border-2 size-[100px] border-white rounded-[50%] p-2 ${isGlowing ? 'glow' : ''}`}
                        onClick={togglePlay}
                    >
                        {isPlaying ? 'Pause' : 'Click me!'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagefive;
