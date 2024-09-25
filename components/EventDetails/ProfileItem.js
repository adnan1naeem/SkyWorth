import React from 'react';
import { Box, Typography } from '@mui/material';

const ProfileItem = ({ iconUrl, text, iconSize = 50, textColor = 'black', sx }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                ...sx
            }}
        >
            <img
                src={iconUrl}
                alt="Profile Icon"
                style={{
                    width: iconSize,
                    height: iconSize,
                    marginRight: '28px',
                    borderRadius: '50%',
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    color: textColor,
                    fontWeight: '500',
                    fontSize: '20px',
                    fontFamily: 'Kanit',
                    textDecoration: 'none',
                    borderBottom: '2px solid grey',
                    '&:hover': {
                        borderBottom: 'none',
                        cursor: 'default',
                    },
                    '&:focus': {
                        outline: 'none',
                    },
                    '&:active': {
                        outline: 'none',
                    },
                    '&:focus-visible': {
                        outline: 'none',
                    },
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default ProfileItem;
