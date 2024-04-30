//import { Box, Heading, Container } from '@chakra-ui/react';
import Notifications from './Notifications';
import Options from './Options';
import VideoPlayer from './VideoPlayer';

const Conference = () => {
    return (
        <div>
            <Heading as="h2" size="2xl"> Video Chat App </Heading>
            <VideoPlayer />
            <Options />
            <Notifications />
        </div>
    );
}
export default Conference;
