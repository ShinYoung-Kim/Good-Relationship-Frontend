import React, { useState } from 'react';

import ChattingPop from './ChattingPop';

import { Popover, PopoverTrigger } from '@/components/ui/popover';

const FloatingButton = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	return (
		<Popover onOpenChange={(isOpen) => setIsPopoverOpen(isOpen)}>
			<PopoverTrigger className={`md:block ${isPopoverOpen ? 'hidden' : ''}`}>
				<img src="/icons/chatting.svg" alt="채팅아이콘" />
			</PopoverTrigger>
			<ChattingPop />
		</Popover>
	);
};

export default FloatingButton;
