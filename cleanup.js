let fs = require('fs');
let path = require('path');
let fse = require('fs-extra');
let folderDest = path.join(require('os').homedir(), 'Downloads\\allFolders')
console.log(folderDest);
let year, month;
let yDest, mDest;
    function cleanup() {
        
        let src = path.join(require('os').homedir(), 'Downloads')
        let odest = src;
        let children = childReader(src);
            for (let i = 0; i < children.length; i++) {
                total++;
                let childPath = path.join(src, children[i]);
                cleanupLogic(childPath, odest);
            }
    }

    function checkWhetherFile(path_string) {
        return fs.lstatSync(path_string).isFile();
    }

    function childReader(src) {
        let children = fs.readdirSync(src);
        return children;
    }

    function cleanupLogic(src, odest) {

        let isFile = checkWhetherFile(src);
        if (isFile == true) {
            let Name = path.basename(src);
        
            let extname = path.extname(Name);
            let eDest = findDestination(extname, odest);
            let {mtime} = fs.statSync(src);
            month = (mtime.getMonth());
            year = (mtime.getFullYear())
            yDest = findYear(year, eDest);
            mDest = findMonth(month, yDest);
            fse.move(src, path.join(mDest, Name), err => {
                if (err) {
                    console.error(err);
                }
                console.log("file moved");
            })
        } else {
            let fname = path.basename(src);
            console.log(fname);
            if(fname!="Downloads" && fname!="media" && fname!="otherFiles" && fname!="programming" && fname!="text"&& fname!='allFolders'){
            let {mtime} = fs.statSync(src);
            month = (mtime.getMonth());
            year = (mtime.getFullYear())
            yDest = findYear(year, folderDest);
            mDest = findMonth(month, yDest);
            fse.move(src, path.join(mDest, fname), err => {
                if (err) {
                    console.error(err);
                }
                console.log("file moved"); 
            })
        }
    }
}

    function findDestination(extname, dest) {
        //handling various extensions

        switch (extname) {

            // audio
            case '.aif':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.cda':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.mid':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.midi':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.mp3':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.m4a':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.mpa':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.ogg':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.wav':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.wma':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.wpl':
                dest = path.join(dest + 'media\\audio');
                break;
            case '.m3u':
                dest = path.join(dest + 'media\\audio');
                break;
                // text
            case '.txt':
                dest = path.join(dest + '\\text\\text_files');
                break;
            case '.doc':
                dest = path.join(dest + '\\text\\microsoft\\word');
                break;
            case '.docx':
                dest = path.join(dest + '\\text\\microsoft\\word');
                break;
            case '.odt ':
                dest = path.join(dest + 'text\\text_files');
                break;
            case '.pdf':
                dest = path.join(dest + 'text\\pdf');
                break;
            case '.rtf':
                dest = path.join(dest + 'text\\text_files');
                break;
            case '.tex':
                dest = path.join(dest + 'text\\text_files');
                break;
            case '.wks ':
                dest = path.join(dest + 'text\\text_files');
                break;
            case '.wps':
                dest = path.join(dest + 'text\\text_files');
                break;
            case '.wpd':
                dest = path.join(dest + 'text\\text_files');
                break;
                //video
            case '.3g2':
                dest = path.join(dest + 'media\\video');
                break;
            case '.3gp':
                dest = path.join(dest + 'media\\video');
                break;
            case '.avi':
                dest = path.join(dest + 'media\\video');
                break;
            case '.flv':
                dest = path.join(dest + 'media\\video');
                break;
            case '.h264':
                dest = path.join(dest + 'media\\video');
                break;
            case '.m4v':
                dest = path.join(dest + 'media\\video');
                break;
            case '.mkv':
                dest = path.join(dest + 'media\\video');
                break;
            case '.mov':
                dest = path.join(dest + 'media\\video');
                break;
            case '.mp4':
                dest = path.join(dest + 'media\\video');
                break;
            case '.mpg':
                dest = path.join(dest + 'media\\video');
                break;
            case '.mpeg':
                dest = path.join(dest + 'media\\video');
                break;
            case '.rm':
                dest = path.join(dest + 'media\\video');
                break;
            case '.swf':
                dest = path.join(dest + 'media\\video');
                break;
            case '.vob':
                dest = path.join(dest + 'media\\video');
                break;
            case '.wmv':
                dest = path.join(dest + 'media\\video');
                break;
                //images
            case '.ai':
                dest = path.join(dest + 'media\\images');
                break;
            case '.bmp':
                dest = path.join(dest + 'media\\images');
                break;
            case '.gif':
                dest = path.join(dest + 'media\\images');
                break;
            case '.jpg':
                dest = path.join(dest + 'media\\images');
                break;
            case '.jpeg':
                dest = path.join(dest + 'media\\images');
                break;
            case '.png':
                dest = path.join(dest + 'media\\images');
                break;
            case '.ps':
                dest = path.join(dest + 'media\\images');
                break;
            case '.psd':
                dest = path.join(dest + 'media\\images');
                break;
            case '.svg':
                dest = path.join(dest + 'media\\images');
                break;
            case '.tif':
                dest = path.join(dest + 'media\\images');
                break;
            case '.tif':
                dest = path.join(dest + 'media\\images');
                break;
            case '.tiff':
                dest = path.join(dest + 'media\\images');
                break;
            case '.cr2':
                dest = path.join(dest + 'media\\images');
                break;
                //     //internet
            case '.asp':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.aspx':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.cer':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.cfm':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.cgi':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.pl':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.css':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.htm':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.js':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.jsp':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.part':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.php':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.rss':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.xhtml':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
            case '.html':
                dest = path.join(dest + 'otherFiles\\internet');
                break;
                //compressed 
            case '.7z':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.arj':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.deb':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.pkg':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.rar':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.rpm':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.tar.gz':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.z':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
            case '.zip':
                dest = path.join(dest + 'otherFiles\\compressed');
                break;
                //disc 
            case '.bin':
                dest = path.join(dest + 'otherFiles\\disc');
                break;
            case '.dmg':
                dest = path.join(dest + 'otherFiles\\disc');
                break;
            case '.iso':
                dest = path.join(dest + 'otherFiles\\disc');
                break;
            case '.toast':
                dest = path.join(dest + 'otherFiles\\disc');
                break;
            case '.vcd':
                dest = path.join(dest + 'otherFiles\\disc');
                break;
                //     //data 
            case '.csv':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.dat':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.db':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.dbf':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.log':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.mdb':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.sav':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.sql':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.tar':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.xml':
                dest = path.join(dest + 'programming\\database');
                break;
            case '.json':
                dest = path.join(dest + 'programming\\database');
                break;
                //     //executables
            case '.apk':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
            case '.bat':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
            case '.com':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
            case '.exe':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
            case '.gadget':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
            case '.jar':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
            case '.wsf':
                dest = path.join(dest + 'otherFiles\\executables');
                break;
                //fonts 
            case '.fnt':
                dest = path.join(dest + 'otherFiles\\fonts');
                break;
            case '.fon':
                dest = path.join(dest + 'otherFiles\\fonts');
                break;
            case '.otf':
                dest = path.join(dest + 'otherFiles\\fonts');
                break;
            case '.ttf':
                dest = path.join(dest + 'otherFiles\\fonts');
                break;
                //     //presentations 
            case '.key':
                dest = path.join(dest + 'text\\presentations');
                break;
            case '.odp':
                dest = path.join(dest + 'text\\presentations');
                break;
            case '.pps':
                dest = path.join(dest + 'text\\presentations');
                break;
            case '.ppt':
                dest = path.join(dest + 'text\\presentations');
                break;
            case '.pptx':
                dest = path.join(dest + 'text\\presentations');
                break;
                //programming
            case '.c':
                dest = path.join(dest + 'programming\\c&c++');
                break;
            case '.class':
                dest = path.join(dest + 'programming\\java');
                break;
            case '.java':
                dest = path.join(dest + 'programming\\java');
                break;
            case '.py':
                dest = path.join(dest + 'programming\\python');
                break;
            case '.bat':
                dest = path.join(dest + 'programming\\shell');
                break;
            case '.h':
                dest = path.join(dest + 'programming\\c&c++');
                break;
                //spreadsheets 
            case '.ods':
                dest = path.join(dest + 'text\\microsoft\\excel');
                break;
            case '.xlr':
                dest = path.join(dest + 'text\\microsoft\\excel');
                break;
            case '.xls':
                dest = path.join(dest + 'text\\microsoft\\excel');
                break;
            case '.xlsx':
                dest = path.join(dest + 'text\\microsoft\\excel');
                break;
                //     //system 
            case '.bak':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.cab':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.cfg':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.cpl':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.cur':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.dll':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.dmp':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.drv':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.icns':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.ico':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.ini':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.lnk':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.msi':
                dest = path.join(dest + 'text\\other\\system');
                break;
            case '.sys':
                dest = path.join(dest + 'text\\other\\system');
                break;
                // No name
            default:
                dest = path.join(dest + '\\otherFiles\\uncategorized');
                break;
        }
        return dest;
    }

    function findYear(year, dest) {
        year = "" + year;
        //switch case
        switch (year) {
            case '2020':
                dest = "" + path.join(dest, '\\2020');
                break;
            case '2019':
                dest = "" + path.join(dest, '\\2019');
                break;
        }

        return dest;
    }

    function findMonth(month, dest) {

        //switch case
        if (month === 0) {
            dest = "" + path.join(dest + '\\Jan');
        } else if (month === 1) {
            dest = "" + path.join(dest + '\\Feb');
        } else if (month === 2) {
            dest = "" + path.join(dest + '\\Mar');
        } else if (month === 3) {
            dest = "" + path.join(dest + '\\Apr');
        } else if (month === 4) {
            dest = "" + path.join(dest + '\\May');
        } else if (month === 5) {
            dest = "" + path.join(dest + '\\Jun');
        } else if (month === 6) {
            dest = "" + path.join(dest + '\\Jul');
        } else if (month === 7) {
            dest = "" + path.join(dest + '\\Aug');
        } else if (month === 8) {
            dest = "" + path.join(dest + '\\Sep');
        } else if (month === 9) {
            dest = "" + path.join(dest + '\\Oct');
        } else if (month === 10) {
            dest = "" + path.join(dest + '\\Nov');
        } else if (month === 11) {
            dest = "" + path.join(dest + '\\Dec');
        }
        return dest;
    }

    cleanup();
    

    


    

