import React from 'react';
import type {AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler} from 'react';

import {Button, Icon, IconData, Text, Tooltip} from '@gravity-ui/uikit';

export interface FilePreviewActionProps {
    id?: string;
    icon: IconData;
    title: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    extraProps?: ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>;
}

export function FilePreviewAction({
    id,
    icon,
    title,
    href,
    onClick,
    extraProps,
}: FilePreviewActionProps) {
    return (
        <Tooltip id={id} content={<Text variant="caption-2">{title}</Text>}>
            <Button
                onClick={onClick}
                view="raised"
                pin="circle-circle"
                href={href}
                size="s"
                extraProps={{'aria-label': title, 'aria-describedby': id, ...extraProps}}
            >
                <Icon data={icon} size={14} />
            </Button>
        </Tooltip>
    );
}

FilePreviewAction.displayName = 'FilePreviewAction';
