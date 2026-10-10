---
title: Kodi 22 "Piers" RC 1
date: 2026-10-10T12:43:00.000+01:00
author: Team Kodi
tags:
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v22.0_piers_rc_1080p.webp
  title: Kodi 22.x "Piers" Release Candidate Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
---
Announcing the first release candidate of Kodi 22 "Piers"!

Since leaving beta, we've been focusing on fixing reported issues and polishing new features. Now, we feel like we've reached the final state we want to ship for v22. We're still tracking a few bugs, but these are mostly contained to the shiny new features introduced in v22.

It's been over two years since the initial Kodi 21 "Omega" release, so before diving into the complete changelog, here are a few highlights from Piers.

### Better HDR and video playback

Piers brings major HDR improvements across platforms, including HDR overlays and UHD PGS subtitles, improved subtitle colour handling, HDR-to-SDR subtitle tone mapping, and an upgrade to FFmpeg 9. 

### Blu-ray got a lot smarter

Blu-ray movie and episode detection has been substantially improved, with better playlist matching, episode handling, library integration and disc navigation.

### Games got a major upgrade

RetroPlayer gained shader support, new scaling options, better multi-disc handling, RetroAchievements support, a new cheat engine, and OpenGL hardware rendering for 3D games.

### Lots more across Kodi

Piers also brings improvements to the video library and Movie Versions, PVR, Android, webOS and Apple platforms, along with new capabilities such as Android deep links, SVG support and the beginnings of WebAssembly support. 

And that's just the short version. Here's the complete changelog for RC 1:

# Changes since v22 Beta 2

## Video

* Upgraded FFmpeg to v9.0.2
* Improved handling of near-standard video frame rates
* Improved stream parameter detection when reopening streams
* Improved detection of PVR, live TV, and other streaming content
* Improved HQ scaler selection for stereoscopic video
* Fixed hangs when opening incomplete or unresponsive video files
* Fixed excessive scanning when seeking past the end of a file
* Fixed playback timing when streams temporarily lack timestamps
* Fixed incorrect cache state detection for real-time streams
* Fixed high CPU usage when a video or audio source starves
* Fixed display latency being lost while paused on hardware-plane renderers
* Fixed pixel format reporting for some hardware decoders
* Fixed handling of malformed NAL units in corrupt streams
* Fixed watched-mode handling while browsing Videos
* Fixed playback shutdown and player-closing races
* Fixed possible crash when closing Kodi during video playback
* Fixed black screen after changing display resolution while paused on GLES
* Fixed stale video widgets after media details change
* Fixed generated video thumbnails using the wrong path
* Fixed video thumbnails and default icons restored from library imports
* Fixed file orientation and centre-mix metadata being lost after settings updates
* Hardened video stacking against malformed and unusual paths

## HDR and Subtitles

* Improved HDR PGS subtitle colour handling
* Added support for HDR overlays, including UHD PGS subtitles
* Improved PGS subtitle colour conversion using the video's actual colorimetry
* Added HDR-to-SDR tone mapping for PGS subtitles on Windows
* Fixed HDR PGS subtitle rendering across GLES platforms
* Fixed translucent GUI elements being composited at the wrong opacity over HDR video
* Fixed 3D side-by-side PGS subtitles
* Fixed forced subtitles not replacing subtitles hidden because they matched the audio language
* Fixed subtitle browsing for streams outside configured media sources
* Improved HDR type reporting on DRM PRIME platforms
* Upgraded libass to v0.17.5

## Blu-ray and Discs

* Improved Blu-ray movie and episode playlist matching using disc authoring metadata
* Improved Blu-ray episode matching heuristics
* Improved Blu-ray playlist handling and internal cleanup
* Added M2TS aspect-ratio detection
* Added indication of Blu-ray playlists already assigned while using the simple menu
* Fixed refreshing Blu-ray information and missing stream details
* Fixed updating and cleaning library entries containing Blu-ray content
* Fixed import/export of folder stacks containing Blu-ray playlists
* Fixed deadlock while probing optical discs
* Fixed the wrong optical disc being played from the context menu
* Fixed ejecting the wrong optical drive
* Fixed startup crash on Windows when a DVD is already in the drive
* Improved Windows optical-drive state caching and detection
* Avoided unnecessary volume reads while enumerating Windows optical drives
* Delayed Windows disc probing until the required services are initialized
* Fixed discs opened through their own VFS protocol not being classified as video

## Audio

* Added audio-stream switching to PAPlayer
* Improved recovery when an HDMI receiver temporarily disappears
* Fixed ALSA error recovery
* Improved XAudio device capability handling across device re-enumeration
* Fixed a VideoPlayer audio regression that could affect playback when the sink had nothing to wait on
* Added additional AudioEngine bitstream-packer test coverage

## Music and Audiobooks

* Added ReplayGain support for Matroska audio
* Restored Nero chapter metadata support for audiobooks
* Fixed artist discography information being lost in several update paths
* Fixed ID3 tag reading from MP2 files
* Improved music GUI performance by loading tags and artwork only when required
* Simplified music scraping job scheduling

## PVR

* Fixed EPG timestamps so they remain valid beyond 2038
* Fixed MySQL/MariaDB EPG searches omitting programmes on the final day of a date range
* Fixed a five-second suspend delay when no PVR client is enabled
* Fixed missing PVR add-ons blocking callers while reporting an error
* Improved retrieval of video-library metadata for recording folders
* Improved language-code documentation used by PVR providers

## Games

* Added a cheat engine to RetroPlayer
* Added hardware rendering for game clients with Game API 8.2.0
* Expanded RetroAchievements with Encore mode, on-screen indicators, and leaderboards
* Improved RetroAchievements login error messages
* Added support for game add-ons to explicitly identify their platforms
* Added disc state to savestates and the rewind buffer
* Improved game launching from My Games to avoid blocking the UI
* Improved launching of plugin-provided games using their resolved paths
* Fixed major RetroPlayer stuttering
* Fixed rewind buffer sizing
* Fixed savestate selection after deleting a savestate
* Fixed black screen after selecting Reset from the in-game OSD
* Fixed paused-frame caching with DMA-backed video memory
* Fixed DirectX shader input and resource handling
* Fixed GLSL shader failure handling
* Fixed GLES software-frame texture handling
* Fixed in-game menu actions operating on the wrong item
* Avoided unnecessary add-on repository access when the required emulator is already known
* Changed rewind to default to Off
* Improved the game OSD layout in Estuary
* Fixed controller capture dialog headings disappearing while listening for input

## Library and Sources

* Improved video scraping performance
* Improved video database episode lookup performance
* Improved audio-language display in the video library
* Improved Video Versions presentation in Estuary
* Improved media flag and version stream-detail ordering
* Added Year as a fallback when Premiered information is unavailable
* Fixed play status for archive contents played from Videos > Files outside a configured source
* Fixed directory artwork being lost when file lists are replaced
* Fixed library import saving broken thumbnails or default icons
* Fixed video widgets not refreshing after media details change
* Improved multi-path source enumeration without unnecessary progress dialogs
* Fixed top-level `special://` locations being lost from navigation history
* Added the Profile directory as an accessible source on all platforms
* Improved video NFO export of default version information

## UI

* Fixed excessive CPU use when progress dialogs are opened from background threads
* Fixed Page Up/Down movement in fixed lists with a custom focus position
* Fixed panel scrollbar page sizing
* Fixed focus restoration occurring before a window has finished initializing
* Fixed widget directory jobs being incorrectly reused with different options
* Fixed a crash caused by concurrent GUI info-label access
* Fixed windows losing their identity when their XML file is unavailable
* Fixed the default focus in the media source dialog
* Fixed the default icon for video extras
* Added support for enabled resource-font add-ons registering their own fonts
* Added `Player.SeekStepValue` for skins
* Added a localized label for the Donate button in System Settings

## Skinning

* Redesigned Estuary media flags with improved context and grouping icons
* Improved Stream Selection flag consistency
* Improved Video Versions presentation
* Improved the game OSD layout
* Polished the add-on settings dialog for expanded game add-on settings
* Improved version stream-detail ordering
* Added Year fallback where Premiered metadata is unavailable

## Add-ons and Python

* Fixed script add-on arguments being lost during execution
* Fixed `Addons.ExecuteAddon` wait handling
* Fixed script waiting after modal add-on installation
* Fixed add-on search crashes
* Fixed Python `getControl()` handling of skin toggle buttons
* Fixed ownership of objects returned in Python lists
* Fixed Python containers returning `none` incorrectly in several cases
* Added support for bytes where Python APIs expect strings
* Restored `xbmc.__version__` to 3.1.0
* Added HDR detail information to Python `VideoStreamDetail`
* Added script execution duration to Python invoker logging
* Modernized Python binding generation to use SWIG directly

## JSON-RPC

* Improved `Files.GetDirectory` to return library metadata when available
* Fixed playlist position remaining stale after its playlist is cleared
* Fixed `JSONRPC.SetConfiguration` dropping configuration namespaces it did not enumerate

## Network and UPnP

* Fixed a race and possible use-after-free while refreshing network interfaces
* Fixed SMB shares becoming unreachable when a hostname resolves to a loopback address
* Fixed SMB seeking after a connection reset
* Improved network ping fallback on systems without permission to open ICMP sockets
* Fixed playback to UPnP renderers that do not send ConnectionManager events
* Fixed a UPnP file-server path traversal vulnerability
* Removed finite-field Diffie-Hellman cipher suites from Kodi's web server
* Stopped TLS record contents from appearing in Curl debug logging
* Fixed AirPlay photo-cache cleanup unnecessarily opening archive files
* Updated libmicrohttpd from v1.0.1 to v1.0.10
* Changed FFmpeg dependency builds to use OpenSSL so `SSL_CERT_FILE` is respected

## Peripherals and Input

* Improved CEC standby handling when Kodi is not the active HDMI source
* Improved Xbox gamepad detection before the joystick add-on has completed discovery
* Added immediate peripheral discovery wakeups when Xbox gamepads appear or generate early input
* Fixed duplicate Xbox actions from a single key press

## Profiles

* Added the Profile directory as a source on all platforms
* Added the profile directory to Android local sources

## Android

* Added support for Kodi deep links
* Updated launcher and Play Store icons
* Fixed stale Android VIEW intents being replayed after process recreation
* Fixed a MediaCodec lifetime race
* Fixed BACK unexpectedly exiting Kodi with Android predictive-back handling
* Fixed IME focus restoration
* Fixed APK assets being marked ready before extraction completes
* Fixed content providers opening files before remote-access permission is checked
* Fixed MediaCodec EGL renderer capability reporting
* Improved HDR PGS subtitle rendering
* Fixed custom application-package names not reaching generated build information

## Windows and Xbox

* Improved Xbox controller discovery and responsiveness
* Fixed duplicate controller actions
* Fixed Kodi startup with a DVD already inserted
* Improved optical-drive state handling and eject behaviour
* Fixed temporary files losing their filename suffixes
* Improved XAudio device capability persistence

## Linux

* Improved Wayland display names using modern output descriptions
* Fixed saved monitor selection with modern Wayland output naming
* Fixed Wayland window geometry after toggling decorations
* Fixed a GBM device-loss lifetime issue
* Fixed black video after changing resolution while paused on GLES
* Improved CPU temperature detection on additional SoCs
* Improved ALSA error recovery
* Improved UPower detection
* Added fallback to the `ping` utility where unprivileged ICMP sockets are unavailable
* Added Russian translations to the Linux desktop entry
* Fixed DMA buffer cleanup when initialization fails
* Fixed X11 windowing code incorrectly accessing EGL state from a GLX context
* Fixed fullscreen transitions where no renderer is available to clear the screen
* Fixed Debian package generation and documented creating DEB packages

## macOS, iOS and tvOS

* Added supported JIT execution on macOS
* Fixed non-browsable macOS volumes appearing as normal storage
* Fixed macOS shutdown after `applicationShouldTerminate` has already been answered
* Improved iOS App Store compliance
* Fixed iOS simulator Python builds
* Fixed Python dependency checks on tvOS
* Improved Apple platform compiler and dependency build flags
* Updated embedded Apple builds to Xcode 26.3

## webOS

* Switched webOS audio output from ALSA to PulseAudio
* Fixed audio on webOS 26
* Fixed broken icons on webOS 4 and older by using GLES 2
* Improved HDR PGS subtitle rendering

## WebAssembly

* Added initial generic WebAssembly compatibility support
* Added the WebAssembly platform runtime skeleton
* Abstracted HTTP access needed by scrapers and metadata providers
* Added renderer support for opting out of GLES texture swizzling

## Developers

* Raised the minimum required CMake version to 3.20
* Improved SWIG detection and added an internal SWIG build option
* Fixed SonarQube builds with newer SWIG
* Improved dependency download retries, including empty downloads
* Improved Windows Ninja toolchain initialization
* Disabled MSBuild node reuse to prevent locked build files
* Improved Apple dependency and compiler configuration
* Fixed nested dependency builds losing the project source directory
* Improved Clang-Tidy integration and excluded generated sources
* Fixed CPack runtime dependencies for newer libbluray and libCEC packages
* Improved Python module installation through pip where supported
* Fixed generated Python stub installation
* Removed the deprecated UWP `/await` build flag
* Improved Debian package generation
* Improved CI and test reliability across Windows, networking, RetroPlayer, Python, media sources, and the internal web server
* Improved Doxygen parameter documentation
* Refreshed repository CODEOWNERS
* Removed obsolete OpenGL roadmap documentation
* Completed migration of runtime GL-extension checks to the enum-based API
* Removed several obsolete or unused internal code paths

## Known issues

* If Kodi is provided without our patched TagLib 2.3.1, Matroska tagging is degraded back to v21
* On Linux, HDR video playback may make some GUI/OSD elements too transparent, washed out, or fuzzy

## Download link

If cutting-edge software is your thing, you can get RC 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Please share your experiences back with us so we can really get going on those bugs. And take a backup first!
