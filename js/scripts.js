function chr(ascii)
{
    return String.fromCharCode(ascii);
}

function generateContacts()
{
    // var email1 = chr(103)+chr(101)+chr(102)+chr(111)+chr(114)+chr(101)+chr(115)+chr(116)+chr(64)+chr(116)+chr(117)+chr(116)+chr(46)+chr(98)+chr(121);
    var email2 = chr(102)+chr(111)+chr(114)+chr(101)+chr(115)+chr(116)+chr(117)+chr(110)+chr(64)+chr(103)+chr(109)+chr(097)+chr(105)+chr(108)+chr(46)+chr(99)+chr(111)+chr(109);
    // $('#email_1').attr("href", "mailto:" + email1);
    // $('#email_1').text(email1);
    $('#email_2').attr("href", "mailto:" + email2);
    $('#email_2').text(email2);
}

function randomOfficial()
{
    let ids = [
        "bPOA05RVPFM", // Beyond the Darkness - Funeral Of Love
        "2CLHi-IWdlQ" // Beyond the Darkness - My Perfect Death (Official Video)

        //"bHQulp2DQ6M", // Beyond the Darkness - Fear's Face (Official Music Video)
        //"DSVAqX_RQtw", // Beyond the Darkness - Short Story (Official Video)
        //"6hWrnAG6-_4", // Beyond the Darkness - Avid Hunger (Official Video)
        //"-h4Q3mj6hWY", // Beyond the Darkness - Buio Omega (Official Video)
        //"imZMRiSExP0"  // Beyond the Darkness - Wheel of Life (Lyric Video)
    ];

    let videoId = ids[Math.floor(Math.random() * ids.length)];

    insertYoutubeVideo("youtube-official", videoId)
}

function randomLive()
{
    let ids = [
        "f1Pl9yIvbYY", // Beyond the Darkness - Forgetarium (Live 31/10/2019)
        "4i5NjgrIRfA", // Beyond the Darkness - Split (Live 31/10/2019)
        "CPzOFAG_OMM", // Beyond the Darkness - Farewell (Live 31/10/2019)
        "Z1XvXkPbkNU", // Beyond the Darkness - Funeral Of Love (Live 31/10/2019)
        "xYHqufz_7lA", // Beyond the Darkness - Avid Hunger (Live 31/10/2019)
        "EMDimg4znCs"  // Beyond the Darkness - My Perfect Death (Live 31/10/2019)
    ];

    let videoId = ids[Math.floor(Math.random() * ids.length)];

    insertYoutubeVideo("youtube-live", videoId)
}

function insertYoutubeVideo(element, videoId) {
    var videoUrl = "https://www.youtube.com/embed/" + videoId + "?rel=0&amp;showinfo=0";
    var videoEmbed = document.getElementById(element)
    videoEmbed.setAttribute('src', videoUrl);
}
