---
title: ' Solution for the "Press ESC in 5 seconds to skip startup.nsh, any other key to continue" Issue on Virtual Machine Boot in UEFI Mode'
short_title: ''
date: 2023-11-22 01:28:09
article: true
timeline: false
isOriginal: true
---


<!-- more -->


#  Solution for the "Press ESC in 5 seconds to skip startup.nsh, any other key to continue" Issue on Virtual Machine Boot in UEFI Mode

When booting a system installed in UEFI mode within a virtual machine, you may encounter the following prompt:

```sql
Press ESC in 5 seconds to skip startup.nsh, any other key to continue.
Shell>_
```

To resolve this issue, you can follow the steps below:

1. <span style="font-weight: bold;" data-type="strong">Access the BIOS Settings:</span>  During startup, follow the prompts to enter the [BIOS settings](https://so.csdn.net/so/search?q=BIOS&spm=1001.2101.3001.7020) and set the hard disk as the first boot device.
2. <span style="font-weight: bold;" data-type="strong">Manually Set the Boot Device:</span>  If the BIOS settings do not resolve the issue, manually set the boot device by following these steps in the Shell command line (comments in angled brackets, and "enter" indicates pressing the Enter key):  
    a. Use the `ls`​ command to list the file directory, then enter `fs0:`​ to access the fs0 directory.

    ```sql
    Shell> ls  <enter>
     Shell> fs0:  <enter>
    ```

    b. Edit the `startup.nsh`​ file.

    ```sql
     FS0> edit startup.nsh  <enter>
    ```

    c. Write the following content into the file, for example: `\EFI\ubuntu\grubx64.efi`​.

    ```sql
     \EFI<lowercase system name, e.g., ubuntu>\grubx64.efi  <enter>
    ```

    d. Press `Ctrl S`​ to save the file, then press `Ctrl Q`​ to exit the editing mode.

    ```sql
    <ctrl+s to save> <enter>
    <ctrl+q to exit editing> <enter>
    ```

    e. Enter the `reset`​ command to restart the virtual machine.

    ```sql
     FS0> reset  <enter>
    ```

By following these steps, you should be able to boot into the system without encountering the startup.nsh prompt.
