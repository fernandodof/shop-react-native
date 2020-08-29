import * as React from 'react';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from '../../constants/Colors';

export const CustomHeaderButton = (props: HeaderButtonProps) => {
	return (<HeaderButton
		{...props}
		IconComponent={Ionicons}
		iconSize={23}
		color={Platform.OS === 'android' ? 'white' : Colors.primary}>
	</HeaderButton>);
};

export default CustomHeaderButton;