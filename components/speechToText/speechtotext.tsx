// components/SpeechToText.tsx
"use client"
import { useState, useRef, useEffect } from 'react';

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

const SpeechToText: React.FC = () => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    // Check if browser supports Speech Recognition
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        setIsSupported(true);
        recognitionRef.current = new SpeechRecognition();
        
        // Configure speech recognition
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        // Handle results
        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          let interimText = '';
          let finalText = '';

          for (let i = 0; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              finalText += result[0].transcript;
            } else {
              interimText += result[0].transcript;
            }
          }

          setTranscript(prev => prev + finalText);
          setInterimTranscript(interimText);
        };

        // Handle errors
        recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };

        // Handle end
        recognitionRef.current.onend = () => {
          setIsListening(false);
          setInterimTranscript('');
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startListening = (): void => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = (): void => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const clearTranscript = (): void => {
    setTranscript('');
    setInterimTranscript('');
  };

  // Function to send text to ElevenLabs TTS (optional)
  const speakWithElevenLabs = async (text: string): Promise<void> => {
    try {
      const response = await fetch('/api/elevenlabs/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      }
    } catch (error) {
      console.error('Error with ElevenLabs TTS:', error);
    }
  };

  if (!isSupported) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        Speech recognition is not supported in this browser.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Speech to Text</h2>
      
      <div className="flex gap-4 mb-4">
        <button
          onClick={startListening}
          disabled={isListening}
          className={`px-4 py-2 rounded font-medium ${
            isListening
              ? 'bg-red-500 text-white cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isListening ? 'Listening...' : 'Start Listening'}
        </button>
        
        <button
          onClick={stopListening}
          disabled={!isListening}
          className="px-4 py-2 bg-gray-500 text-white rounded font-medium hover:bg-gray-600 disabled:opacity-50"
        >
          Stop
        </button>
        
        <button
          onClick={clearTranscript}
          className="px-4 py-2 bg-red-500 text-white rounded font-medium hover:bg-red-600"
        >
          Clear
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Final Transcript:
          </label>
          <textarea
            value={transcript}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTranscript(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your speech will appear here..."
          />
        </div>

        {interimTranscript && (
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Interim Results:
            </label>
            <div className="p-3 bg-gray-100 border rounded-md text-gray-600 italic">
              {interimTranscript}
            </div>
          </div>
        )}

        {transcript && (
          <button
            onClick={() => speakWithElevenLabs(transcript)}
            className="px-4 py-2 bg-green-500 text-white rounded font-medium hover:bg-green-600"
          >
            Speak with ElevenLabs
          </button>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Status: {isListening ? (
          <span className="text-red-500 font-medium">🎤 Listening...</span>
        ) : (
          <span className="text-gray-500">Ready to listen</span>
        )}
      </div>
    </div>
  );
};

export default SpeechToText;