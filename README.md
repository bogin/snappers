
# Project Snappers

**Author:** Shachar Bogin

## Introduction
Welcome to **Project Snappers**! This project was developed within a PC environment, utilizing a compressed version of the ffmpeg command. The 'bin' folder of ffmpeg has been added to the PC's environment variable path. While the application is optimized for Windows, please ensure that your terminal supports the 'cmd' command 'ffmpeg' if you plan to use it on other platforms.

## Installation
1. **Install FFmpeg:** If you haven't already, install FFmpeg by following the instructions in this tutorial: [How to Install FFmpeg on Windows](https://www.geeksforgeeks.org/how-to-install-ffmpeg-on-windows/).
2. **Clone the Project:** Clone this project using Git: `git clone https://github.com/bogin/snappers.git`
3. **Install Dependencies:** Navigate to the project directory and install the required dependencies: `npm install`
4. **Start the Application:** Launch the application: `npm run start`

## Configuration

### File ffmpeg.configurations.ts
To adapt the application for your system, refer to the this file. This file contains the 'command key' that can be customized to fit your specific syntax requirements for the 'cmd' command.
Simply mold the command key from 'ffmpeg' into 'your_special_key ffmpeg' (e.g., 'sudo ffmpeg').

### File app.configurations.ts
- **facebookRTMPUrl:** Add your Facebook RTMP key.
- **streamKey:** Include your Facebook stream key.
- These keys are crucial and can be obtained from Facebook Live's 'Streaming software' section.

### File streams.configurations.ts
This file contains an array of stream configurations. By adding streams to the array, you can incorporate additional videos into your live broadcasts automatically.

Example of a Stream:
- **type:** Value of StreamType enum.
- **data:**
  - **video_src:** Path to the video from the root.
  - **length_in_seconds:** Duration of the video stream in seconds.
  - **output_url:** Combination of facebookRTMPUrl and streamKey.

### File facebook-live-default-command-args.configurations.ts
This file defines an array of command options for FFmpeg, allowing for a more structured and readable command configuration.

### File ffmpeg.configurations.ts
In this file, the command name is defined, along with an array of command handlers that are executed during the FFmpeg command's execution.

## Streamers
The project includes 'ffmpegStreamer' as an implementation of the abstract class 'streamer.class.ts.' If you wish to add a custom streamer, follow these steps:
1. **Extend the Class:** Create an extended implementation of the 'streamer.class.ts' class.
2. **Add Streamer Type:** Introduce a new streamer type.
3. **Update the Factory:** Modify the streamer factory in 'streamer.factory.ts' to accommodate your new streamer.
Adding your custom streamer and configuring it within 'streams.configurations.ts' will allow the application to seamlessly integrate your innovation.

If you have any questions or require further guidance, feel free to reach out!




//////////////////////////////////////////////////////
# Project Snappers

**Author:** Shachar Bogin

## Introduction
Welcome to **Project Snappers**! This project has been meticulously crafted within a PC environment. Leveraging a compressed version of the ffmpeg command, coupled with the inclusion of its 'bin' folder in the PC's environment variable path, this application is primarily tailored for Windows users. However, should you decide to embark on other platforms, ensure your terminal embraces the 'cmd' command 'ffmpeg' for smooth sailing.

## Installation
make sure you have NodeJS & NPM installed.
1. **Install FFmpeg:** To kick-start the journey, install FFmpeg by following the guidelines provided in this tutorial: [How to Install FFmpeg on Windows](https://www.geeksforgeeks.org/how-to-install-ffmpeg-on-windows/).
2. **Clone the Project:** Clone this project using Git: `git clone https://github.com/bogin/snappers.git`
3. **Dependencies Installation:** `npm install`
4. **Initiate the application:** `npm run start`

## Configuration
### File ffmpeg.configurations.ts
This file holds the secrets to tailor the application for your specific system. Within this file, discover the 'command key,' pivotal for seamless system integration. Need a bespoke syntax for the 'cmd' command? 

### File app.configurations.ts
- **facebookRTMPUrl:** Insert your Facebook RTMP key.
- **streamKey:** Include your Facebook stream key.
- These two keys, essential for operation, can be acquired from Facebook Live's 'Streaming software' section.

### File streams.configurations.ts
Dive into the realm of limitless streaming possibilities through the 'streams.configurations.ts' file. This reservoir of configurations holds an array of stream setups. By seamlessly appending streams to the array, you're granting the live broadcast a captivating and automated video library.

Example of a Stream:
- **type:** Value of StreamType enum (future extension potential).
- **data:**
  - **video_src:** Path to the video from the root.
  - **length_in_seconds:** Duration of the video stream in seconds.
  - **output_url:** Combination of facebookRTMPUrl and streamKey.

### File facebook-live-default-command-args.configurations.ts
The labyrinth of FFmpeg command flags can be daunting. We've endeavored to create a structure that streamlines their usage. Here, an array of { array_flags, value, model_key } simplifies the process, ushering in clarity and ease of use. Flags with values seamlessly derive their essence from the stream data, streamlining the journey.

### File ffmpeg.configurations.ts
The beating heart of command execution, the 'ffmpeg.configurations.ts' file houses the command name, paving the way for effective execution. Delve into the realm of event handling through the 'command handlers array.' This intricate dance of command registration and execution holds the key to seamless error handling.

## Streamers
The heartbeat of the system, 'ffmpegStreamer', stands tall as an implementation of the abstract class 'streamer.class.ts.' Keen on customization? Forge your path:
1. **Extend the Class:** Expand the horizons by extending this class's implementation.
2. **Add Streamer Type:** Breathe life into a new streamer type.
3. **Update the Factory:** Revitalize the streamer factory within 'streamer.factory.ts' with your creation.
By weaving your custom streamer and extending the application's configuration, you enable the system to effortlessly embrace your innovation.

Have queries or seek guidance? The beacon of assistance awaits your signal!


////////////
# Project Snappers

Author: Shachar Bogin

## Introduction
This project was developed on a PC environment. It utilizes a zipped version of the ffmpeg command, with its 'bin' folder added to the PC's environment variable path. The application is designed for use on Windows; however, if you intend to use it on other platforms, please ensure that your terminal supports the 'cmd' command 'ffmpeg'.

## Installation
1. Install ffmpeg: Follow the instructions at [How to Install FFmpeg on Windows](https://www.geeksforgeeks.org/how-to-install-ffmpeg-on-windows/).
2. Clone this project using Git: `git clone https://github.com/bogin/snappers.git`
3. Install project dependencies: `npm install`
4. Start the application: `npm run start`


## Configuration
To customize the application for your specific system, refer to the 'ffmpeg.configurations.ts' file. You can find the 'command key' in this file. If your system requires a specific syntax for the 'cmd' command, you can modify the command key from 'ffmpeg' to 'your_special_key ffmpeg' (e.g., 'sudo ffmpeg').

### File app.configurations.ts:
    facebookRTMPUrl: Add your facebook RTMP key.
    streamKey: Add your facebook steamKey.
    Those 2 keys are mandatory and you can obtain them from facebbok live
    under 'Streaming software' section.

### File streams.configurations.ts
    This file contain array of stream configurations,
    By adding streams to the array we can add more videos
    to out live bordcast automaticlly. 

    here is example of a stream:
    type: value of StreamType enum - in the feture we could add types,
    data: 
        video_src: path to video from root,
        length_in_seconds: video stream time length,
        output_url: facebookRTMPUrl/streamKey`

### File facebook-live-default-command-args.configurations.ts:
   
    FFmpeg commands in cmd come with numerous flags, but they can appear messy and hard to manage. While constants like const videoSrcFlagCommand = '-re -i video_src' help, they may clutter and complicate things.

    To enhance clarity and maintainability, I introduced a structured solution. I created an array in a file containing 
    { flags_array, value, model_key } objects, 
    e.g., { flags: ['-re', '-i'], value: '', model_key: 'video_src' }.
   
    Some of the flags will have a predfined value set to them, and some will need to drive thier value from the stream data.
    the model_key property unsures that dynamic values will be filled from the configurationsin 'streams.configurations.ts' file

    Feel free to change, remove and create items in this array.
    
    
### File ffmpeg.configurations.ts: 
    In this file I added the command name as discussed above, and the 
    command handlers array:

    When we execute node child_process.spawn command we can register 
    listerner events to the command, to handle errors I added the
    'exit' handler that can inform on success / error of the command.

    You can add more common event handlers - just add to this array
    object such as { name: 'event_name', handler: Function } and this
    event will be automatilly regiter on and ffmpeg command exection. 


## Streamers:
    I implemented ffmpegStrimer as implamentation of ubstract class streamer.class.ts.
    You can add your own custom streamer by:
        1. extend this class implemntation.
        2. add streamer type.
        3. Update streamer.factory.ts file create function with your new   streamer.
    By doing so, and adding the configuration to streams.configurations.ts
    the system will automaticlly use the new streamer.

Feel free to reach out if you have any questions or need further assistance!
