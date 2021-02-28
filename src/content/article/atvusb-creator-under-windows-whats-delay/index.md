---
title: 'ATVUSB-Creator under Windows: Whats the delay?'
date: 2008-10-12T03:00:00Z
author: Team XBMC
---
I’ve gotten numinous queries about when atvusb-creator will get released for the Windows platform. Rest assured, it’s in progress. I thought I would take a little time to explain the difficulties.

 First, Windows is really a goofy platform, it has almost no command-line tools that are of any use. Or where an interesting command-line tool does exist it does not work under WinXP and/or Vista. Diskpart is a good example, diskpart only knows about USB drive under Vista. And how long has WinXP been around? Stupid, just plain stupid.

 In order to create a USB flash drive (patchstick) that will boot under the AppleTV, there are a few requirements.

 1) The AppleTV boot.efi extracted from an AppleTV update DMG

 2) GPT formated USB flash drive with two partitions, the first with a GUID of apple\_recovery, the second can be any other format that has long file name support (ext2, fat32 or HFSplus).

 3) A method to copy boot.efi into the first partition along with the required bits to boot the AppleTV.

 4) A method to copy the selected plugins and packages to the second partition. This is where patchstick.sh and the payloads live.

 Let’s take this one at a time;

 1) This means mounting the DMG disk image under Windows. But Windows does not understand a DMG disk image. As a matter of fact, Windows does not understand any type disk image (what were they thinking). There are tools that one can install but I don’t want to install anything to a users Windows box. Fortunately, a few months ago, 7-Zip gained code to allow DMG extractions and what was a very difficult task became easy. You need the 4.59 alpha3 or better release. Extraction is a two step from the command line. The first step extract the actual hfsplus filesystem.The second step extracts boot.efi from the hfsplus filesystem.

 
> 7z e 2Z694-5428-3.dmg 2.hfs7z e 2.hfs OSBoot\System\Library\CoreServices\boot.efi  

 2) Again, Window (WinXP-32) does not understand GPT disk format. WinXP 64bit and Vista say they do but knowing how Microsoft does things, good luck. There’s one software tool that cost $20 but that sort of defeats the purpose of open software. I originally thought I could just create a GPT format disk, sync GPT partitions to the MBR partitions and Windows would see the MBR defined partitions but noooo. You can boot Windows this way but not that’s not what I needed. The only free way to create a GPT formated USB flash drive under Windows is to pre-create a GPT format disk image and use DD.exe to clone it to the USB stick. DD.exe is also open source so life is good.

 3) Injecting boot.efi into the first partiton. First partiton is HFSplus format with a different GUID. Again Windows gets in the way, it does not understand HFSplus and there are no free tools that do not require an install. Bummer. This stumped me for about a month until I realized the solution. The inject of boot.efi is solved by pre-crafting a HFSplus partition image with a zeroed boot.efi (must also be contiguous) in place. Knowing the byte offset of the dummy boot.efi file, I can use standard binary file i/o to replace it with the real boot.efi. This HFSplus partition image is then injected into the proper place of the GPT format disk image. Seems simple but this step took weeks to trying other methods before coming up with this idea.

 4) The second partition can be fat32 (need long file name support). Because Windows has no support to mount a disk or partition image we have to get down and dirty. After many attempts using various libraries and even thinking about extracting fat32 support from OSX or Linux (ugh), I finally found some source code (and GPL too) that will let me copy a file from the Windows file system into a fat32 partition image. The code is not complete and directory creation is missing but I can side step that by pre-crafting the fat32 partition image to include the required directory paths. Then I just fill in the contents under atvusb-creator according to the user selection. Once the fat32 partition image is complete, then like the first partition, inject it into the proper place inside the GPT formated USB disk image. Then this disk image is overlaid onto the physical flash device using DD.exe.

 All this sounds pretty simple now but has taken several months of dead ends, trial and failure and other yea—boo attempts. Now all the pieces are in place and I can proceed with linking it all together and getting atvusb-creator for the Windows platform into a testing then release status.

 