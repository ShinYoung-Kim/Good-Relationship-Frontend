import { useMeeting } from '@/hooks/meeting';

export const useLocalStream = () => {
	const { localStreamRef } = useMeeting();

	const getLocalStream = async () => {
		return await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
	};
	const setLocalStream = (stream: MediaStream) => {
		localStreamRef.current = stream;
	};
	const addStreamTracksToPeer = (peerConnection: RTCPeerConnection) => {
		if (!localStreamRef.current) {
			return;
		}

		localStreamRef.current.getTracks().forEach((track) => {
			if (!localStreamRef.current) {
				return;
			}
			peerConnection.addTrack(track, localStreamRef.current);
		});
	};

	return { localStreamRef: localStreamRef, setLocalStream, getLocalStream, addStreamTracksToPeer };
};
