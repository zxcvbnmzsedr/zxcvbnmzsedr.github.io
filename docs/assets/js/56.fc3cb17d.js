(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{365:function(t,s,n){"use strict";n.r(s);var e=n(6),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"后台使用rclone进行同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台使用rclone进行同步"}},[t._v("#")]),t._v(" 后台使用Rclone进行同步")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rclone"),s("OutboundLink")],1),t._v(" 是一个杰出的、开源的文件同步工具。")]),t._v(" "),s("p",[t._v("支持了很多不同网盘的同步服务，然而，在使用Rclone进行同步的时候，像Dropbox或者Onedriver一样，在保存文件的时候进行无感知的同步，Github有个issue详细讨论了这个问题"),s("a",{attrs:{href:"https://github.com/rclone/rclone/issues/249",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rclone/rclone/issues/249"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("办法总比困难多，为了解决这个问题，通常的做法是使用Cron脚本，定时执行Sync的命令，以达到无感知同步的功能。")]),t._v(" "),s("p",[t._v("我们可以改善使用Cron同步文件的行为，linux中有监控文件改变的脚本"),s("a",{attrs:{href:"https://linux.die.net/man/1/inotifywait",target:"_blank",rel:"noopener noreferrer"}},[t._v("inotifywait"),s("OutboundLink")],1),t._v(" , 安装方式在 "),s("a",{attrs:{href:"https://command-not-found.com/inotifywait",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://command-not-found.com/inotifywait"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("将inotifywait 注册成系统服务，这样即使在系统重启之后也能够继续保持同步。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("p",[t._v("下面是脚本内容:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## One-way, immediate, continuous, recursive, directory synchronization")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##  to a remote Rclone URL. ( S3, SFTP, FTP, WebDAV, Dropbox, etc. )")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Optional desktop notifications on sync events or errors.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Useful only for syncing a SMALL number of files (< 8192).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##  (See note in `man inotifywait` under `--recursive` about raising this limit.)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Think use-case: Synchronize Traefik TLS certificates file (acme.json)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Think use-case: Synchronize Keepass (.kdbx) database file immediately on save.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Think use-case: Live edit source code and push to remote server")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## This is NOT a backup tool!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## It will not help you if you delete your files or if they become corrupted.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## If you need a backup tool, check out https://blog.rymcg.tech/blog/linux/restic_backup")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Setup: Install `rclone` from package manager.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Run: `rclone config` to setup the remote, including the full remote")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   subdirectory path to sync to.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## MAKE SURE that the remote (sub)directory is EMPTY")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   or else ALL CONTENTS WILL BE DELETED by rclone when it syncs.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## If unsure, add `--dry-run` to the RCLONE_CMD variable below,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##   to simulate what would be copied/deleted.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Enable your user for Systemd Linger: sudo loginctl enable-linger $USER")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## (Reference https://wiki.archlinux.org/title/Systemd/User#Automatic_start-up_of_systemd_user_instances)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Copy this script any place on your filesystem, and make it executable: `chown +x sync.sh`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Edit all the variables below, before running the script.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Run: `./sync.sh systemd_setup` to create and enable systemd service.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Run: `journalctl --user --unit rclone_sync.${RCLONE_REMOTE}` to view the logs.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## For desktop notifications, make sure you have installed a notification daemon (eg. dunst)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Edit the variables below, according to your own environment:")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RCLONE_SYNC_PATH: The path to COPY FROM (files are not synced TO here):")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RCLONE_SYNC_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/user/dav-sync"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RCLONE_REMOTE: The rclone remote name to synchronize with.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Identical to one of the remote names listed via `rclone listremotes`.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Make sure to include the final `:` in the remote name, which")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   indicates to sync/delete from the same (sub)directory as defined in the URL.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (ALL CONTENTS of the remote are continuously DELETED")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  and replaced with the contents from RCLONE_SYNC_PATH)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RCLONE_REMOTE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webdav-remote:"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RCLONE_CMD: The sync command and arguments:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RCLONE_CMD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rclone -v sync '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_SYNC_PATH}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v('"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WATCH_EVENTS: The file events that inotifywait should watch for:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WATCH_EVENTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modify,delete,create,move"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SYNC_DELAY: Wait this many seconds after an event, before synchronizing:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYNC_DELAY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SYNC_INTERVAL: Wait this many seconds between forced synchronizations:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYNC_INTERVAL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NOTIFY_ENABLE: Enable Desktop notifications")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NOTIFY_ENABLE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SYNC_SCRIPT: dynamic reference to the current script path")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYNC_SCRIPT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("realpath $0"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MESSAGE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${NOTIFY_ENABLE}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify-send")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rclone '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MESSAGE}")]),t._v('"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("rclone_sync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -x\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Do initial sync immediately:")]),t._v("\n    notify "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Startup"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_CMD}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Watch for file events and do continuous immediate syncing")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and regular interval syncing:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\tinotifywait --recursive --timeout "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SYNC_INTERVAL}")]),t._v(" -e "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${WATCH_EVENTS}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_SYNC_PATH}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("/dev/null\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" -eq "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# File change detected, sync the files after waiting a few seconds:")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SYNC_DELAY}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_CMD}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t\tnotify "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Synchronized new file changes"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" -eq "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# inotify error occured")]),t._v("\n\t    notify "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inotifywait error exit code 1"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" -eq "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Do the sync now even though no changes were detected:")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_CMD}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("systemd_setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -x\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" loginctl show-user "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Linger=no"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User account does not allow systemd Linger."')]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"To enable lingering, run as root: loginctl enable-linger '),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v('"')]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Then try running this command again."')]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/.config/systemd/user\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SERVICE_FILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/.config/systemd/user/rclone_sync."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v(".service\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -f "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVICE_FILE}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unit file already exists: '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVICE_FILE}")]),t._v(' - Not overwriting."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVICE_FILE}")])]),t._v("\n[Unit]\nDescription=rclone_sync "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v("\n\n[Service]\nExecStart="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SYNC_SCRIPT}")]),t._v("\n\n[Install]\nWantedBy=default.target\nEOF")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    systemctl --user daemon-reload\n    systemctl --user "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" --now rclone_sync."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v("\n    systemctl --user status rclone_sync."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You can watch the logs with this command:"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   journalctl --user --unit rclone_sync.'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${RCLONE_REMOTE}")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    rclone_sync\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CMD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CMD}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$@")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n")])])]),s("p",[t._v("‍")])])}),[],!1,null,null,null);s.default=a.exports}}]);