# Project Snappers

Author: Shachar Bogin

## Introduction
This application stream sequence of videos by configurations.

This project was developed on a PC environment. It utilizes a zipped version of the ffmpeg command, with its 'bin' folder added to the PC's environment variable path. 

The application is designed for use on Windows; however, if you intend to use it on other platforms, please ensure that your terminal supports the `cmd` command `ffmpeg`.

## Installation
1. Install ffmpeg: Follow the instructions at [How to Install FFmpeg on Windows](https://www.geeksforgeeks.org/how-to-install-ffmpeg-on-windows/).
2. Clone this project using Git: `git clone https://github.com/bogin/snappers.git`
3. Install project dependencies: `npm install`
4. Start the application: `npm run start`


## Configuration


To customize the application for your specific system, refer to the `ffmpeg.configurations.ts` file. You can find the `command_key` in this file. If your system requires a specific syntax for the 'cmd' command, you can modify the command key from 'ffmpeg' to 'your_special_key ffmpeg' (e.g., 'sudo ffmpeg').

### File ffmpeg.configurations.ts: 
In this file I added the command name as discussed above, and the 
command handlers array:

When we execute node child_process.spawn command we can register 
listerner events to the command, to handle errors I added the
'exit' handler that can inform on success / error of the command.

You can add more common event handlers - just add to this array
object such as `{ name: 'event_name', handler: Function }` and this
event will be automatilly regiter on and ffmpeg command exection. 


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
   
FFmpeg commands in cmd come with numerous flags, but they can appear messy and hard to manage. While constants like `const videoSrcFlagCommand = '-re -i video_src'` help, they may clutter and complicate things.

To enhance clarity and maintainability, I introduced a structured solution. I created an array in a file containing `{ flags_array, value, model_key }` objects, 
e.g., `{ flags: ['-re', '-i'], value: '', model_key: 'video_src' }`.

Some of the flags will have a predfined value set to them, and some will need to drive thier value from the stream data.
the model_key property unsures that dynamic values will be filled from the configurationsin 'streams.configurations.ts' file

Feel free to change, remove and create items in this array.

    

## Streamers:
I implemented ffmpegStrimer as implamentation of ubstract class streamer.class.ts.
You can add your own custom streamer by:
    1. extend this class implemntation.
    2. add streamer type.
    3. Update streamer.factory.ts file create function with your new   streamer.
By doing so, and adding the configuration to streams.configurations.ts
the system will automaticlly use the new streamer.

Feel free to reach out if you have any questions or need further assistance!
