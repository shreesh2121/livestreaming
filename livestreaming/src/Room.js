import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomId } = useParams();

  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  //   // start the call
  let myMeeting = async (element) => {
    //   // generate Kit Token
    const appID = 1732600091;
    const serverSecret = "9386237185b77e24bc3377d780e269dd";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      randomID(5),
      randomID(5)
    );

    //     // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    //     // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        // config: {
        //   role,
        // },
      },
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
    });
  };

  return (
    <div ref={myMeeting}></div>
    //   return <div>{roomId}</div>;
  );
}

export default Room;
