---
title: 'Create bootable USB disk on Windows manually'
date: 2008-02-06T03:00:00Z
author: Team XBMC
featured_image: ""
---
 I have been experimenting with the creation of bootable flash disk under Windows since it is not a trivial process and I have not identified a simple and effective tool doing the job.  
 There may be several variants, but this one works and it’s easy to describe.  
*You must be logged as local administrator to perform these steps.*

 **Needed tools**

 
 * aefdisk32 – cmd-line partitioning tools. Get it from [here](http://www.aefdisk32.com/). Note that this is needed under XP only, since diskpart in Vista supports removable disks.
 * syslinux for win32. Get the last version from [kernel.org](https://cdn.kernel.org/pub/linux/utils/boot/syslinux/)
 * WinImage. To extract the files form the original LiveXBMC image. Get it from its [Home page](http://www.winimage.com/).
 
 **Step 1. Identify the disk with aefdisk32**

 Since you may not want to erase your hard drive you need to be careful with this: using

 aefdisk32 n /allsizewhere n=1,2 …max number of disks you have, find the disk number related to the USB flash disk by matching the disk capacity. In the following example **2** is such a number.

 **Step 2. Erase the disk, create a primary FAT partition and make it active and bootable**

 Using aefdisk32 this is all in one single instruction:

 aefdisk32.exe 2 /delall /pri:0:c /activate:1 /mbrUsing DISKPART on Vista:

 List disk select disk 1 clean create partition primary select partition 1 active format fs=fat32 assign exit**Step 3. Format the partition**  
 If aefdisk32 has been used for step 2, the following is needed to format the partition:

 format X: /fs:fatChange X to the letter that your system has assigned to your removable disk!

 Vista users don’t need to do it since DISKPART has already done it.

 **Step 4. Put syslinux on the flash disk**

 syslinux -f X:Change X to the letter that your system has assigned to your removable disk!

 **Step 5. Extract LiveXBMC files**

 Using WinImage, extract the following files from the LiveXBMC image:

 boot.msg ext3fs.img initrd0.img rootfs.img syslinux.cfg vmlinuzand save them on the flash disk.

 That’s it. You are now ready to boot from the USB disk into LiveXBMC.

  