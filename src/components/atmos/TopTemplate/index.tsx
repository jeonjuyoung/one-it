import "./topTemplate.scss";
import { HomeIcon } from '@public/icons';
import { FC } from 'react';

interface Props {
    title: string;
    red?: boolean;
}

const TopTemplate: FC<Props> = ({ title, red }): JSX.Element => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className={`title ${red? 'red' : ''}`}>
                    {title}
                </div>
                <div className='path'>
                    <HomeIcon />&gt;&nbsp;{title}
                </div>
            </div>
            <div className='divider' />
        </div>
    )
}

export default TopTemplate;