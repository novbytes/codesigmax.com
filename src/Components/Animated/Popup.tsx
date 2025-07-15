import * as icon from "lucide-react";
import { useState, useEffect } from "react";

interface PopupAdsProps {
    title: string;
    description: string;
    thumbnail: string;
    sourceLink: string; // New prop for source link
    thumbnailFormat?: 'square' | 'landscape' | 'portrait';
    animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'pulse' | 'fade';
    onInterest?: () => void;
    onNotInterest?: () => void;
    showCloseButton?: boolean;
    durationBeforeShow?: number;
}

export function ShowPopupAds({
    title,
    description,
    thumbnail,
    sourceLink, // Destructure new prop
    thumbnailFormat = 'square',
    animation = 'slide-up',
    onInterest,
    onNotInterest,
    showCloseButton = true,
    durationBeforeShow = 3000
}: PopupAdsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showNotInterestConfirm, setShowNotInterestConfirm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, durationBeforeShow);

        return () => clearTimeout(timer);
    }, [durationBeforeShow]);

    const handleInterest = () => {
        window.open(sourceLink, '_blank'); // Open source link in new tab
        setIsVisible(false);
        onInterest?.();
    };

    const handleNotInterest = () => {
        if (!showNotInterestConfirm) {
            setShowNotInterestConfirm(true);
        } else {
            setIsVisible(false);
            onNotInterest?.();
        }
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const getAnimationClass = () => {
        switch (animation) {
            case 'slide-up':
                return 'animate-slide-up';
            case 'slide-down':
                return 'animate-slide-down';
            case 'slide-left':
                return 'animate-slide-left';
            case 'slide-right':
                return 'animate-slide-right';
            case 'pulse':
                return 'animate-pulse';
            case 'fade':
                return 'animate-fade-in';
            default:
                return 'animate-slide-up';
        }
    };

    const getThumbnailClass = () => {
        switch (thumbnailFormat) {
            case 'landscape':
                return 'aspect-video';
            case 'portrait':
                return 'aspect-[9/16]';
            default: // square
                return 'aspect-square';
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md ${getAnimationClass()}`}>
                {showCloseButton && (
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Close popup"
                    >
                        <icon.X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                )}

                <div className={`w-full ${getThumbnailClass()} overflow-hidden max-h-48`}>
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {description}
                    </p>
                    
                    {/* Source link displayed below description */}
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                        Sumber: <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">{new URL(sourceLink).hostname}</a>
                    </div>

                    {showNotInterestConfirm ? (
                        <div className="space-y-3">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Apakah Anda yakin tidak tertarik dengan penawaran ini?
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowNotInterestConfirm(false)}
                                    className="flex-1 py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Kembali
                                </button>
                                <button
                                    onClick={handleNotInterest}
                                    className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    <icon.ThumbsDown className="w-4 h-4" />
                                    Tetap Tidak Tertarik
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <button
                                onClick={handleNotInterest}
                                className="flex-1 py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <icon.ThumbsDown className="w-4 h-4" />
                                Tidak Tertarik
                            </button>
                            <button
                                onClick={handleInterest}
                                className="flex-1 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <icon.ThumbsUp className="w-4 h-4" />
                                Tertarik
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}