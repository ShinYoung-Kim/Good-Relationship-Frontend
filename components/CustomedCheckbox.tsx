'use client';

import { cx } from 'class-variance-authority';
import { useState } from 'react';

import Icon from '@/components/Icon';
import { colors } from '@/constants/colors';

type CustomedCheckboxProps = {
	label: string;
};

const CustomedCheckbox = ({ label }: CustomedCheckboxProps) => {
	const colorMatching = {
		checked: {
			circle: 'bg-Gray-500',
			icon: colors['Gray-100'],
		},
		unchecked: {
			circle: 'bg-Gray-200',
			icon: colors['Gray-300'],
		},
	};

	const [isChecked, setIsChecked] = useState(false);
	const toggleCheck = () => {
		setIsChecked((prev) => !prev);
	};
	const getKeyByIsChecked = () => {
		return isChecked ? 'checked' : 'unchecked';
	};

	return (
		<div className="flex items-center w-full cursor-pointer gap-[10px] py-[10px]" onClick={toggleCheck}>
			<div
				className={cx(
					'w-6 h-6 rounded-[100px] flex items-center justify-center',
					colorMatching[getKeyByIsChecked()].circle,
				)}
			>
				<Icon id="check" width={10} height={7} color={colorMatching[getKeyByIsChecked()].icon} />
			</div>
			<span className="typo-SubHeader2">{label}</span>
		</div>
	);
};

export default CustomedCheckbox;
