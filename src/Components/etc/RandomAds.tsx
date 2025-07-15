import { useState, useEffect } from "react";
import { ShowPopupAds } from "../Animated/Popup";

interface AdContent {
    title: string;
    description: string;
    thumbnail: string;
    sourceLink: string;
    thumbnailFormat?: 'square' | 'landscape' | 'portrait';
}

const adsList: AdContent[] = [
    {
        title: "Follow Github Ku",
        description: "Follow biar ku update source code react ini ke repository github.",
        thumbnail: "https://tse1.mm.bing.net/th/id/OIP.Bw11ygY5NxZM6wd2L6l_swHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        sourceLink: "https://github.com/novbytes",
        thumbnailFormat: "square"
    }
];

export const ShowRandomAds = () => {
    const [showAd, setShowAd] = useState(false);
    const [currentAd, setCurrentAd] = useState<AdContent | null>(null);
    const [timerId, setTimerId] = useState<number | null>(null);

    const getRandomAd = () => {
        const randomIndex = Math.floor(Math.random() * adsList.length);
        return adsList[randomIndex];
    };

    const setRandomTimer = () => {
        const min = 4.5 * 60 * 1000; 
        const max = 7.5 * 60 * 1000; 
        const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;

        const id = setTimeout(() => {
            setCurrentAd(getRandomAd());
            setShowAd(true);
        }, randomTime);

        setTimerId(id);
    };

    useEffect(() => {
        setRandomTimer();

        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, []);

    const handleClose = () => {
        setShowAd(false);
        setRandomTimer();
    };

    if (!showAd || !currentAd) return null;

    return (
        <ShowPopupAds
            title={currentAd.title}
            description={currentAd.description}
            thumbnail={currentAd.thumbnail}
            sourceLink={currentAd.sourceLink}
            thumbnailFormat={currentAd.thumbnailFormat}
            animation="slide-up"
            onInterest={() => {
                console.log("User interested in:", currentAd.title);
                handleClose();
            }}
            onNotInterest={() => {
                console.log("User not interested in:", currentAd.title);
                handleClose();
            }}
            showCloseButton={true}
        />
    );
};