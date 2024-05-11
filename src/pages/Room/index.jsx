import React from 'react';
import {useParams} from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import { ZegoSuperBoardManager } from "zego-superboard-web";
const RoomPage=() =>{
    const {roomId}=useParams();
    const myMeeting=async (element) =>{
        const appID= ;//put appID here
        const serverSecret="";//put key here
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Nidhi");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.addPlugins({ZegoSuperBoardManager});
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:`http://localhost:3000/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:true,
            whiteboardConfig: {            
                showAddImageButton: true, 
             },
        });
    };
    return <div>
    <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>;
    </div>;
};
export default RoomPage;
