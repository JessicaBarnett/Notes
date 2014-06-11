//BASIC COMMAND LINE COMMANDS

	//clears terminal window
		clear

	//list files in directory
		ls
		ls -l (list w/ permissions)
		ls -a (list all files inc. those starting with a full stop (.profile, .hidden))
		ls -la (list w/ permissions and hidden files)

	//change directory
		cd

	//print working directory
		pwd

	//move and rename (rename is like moving file to a new name/location and deleting old one.  hence same command)
		mv (current name/location) (target name/location)(target suffix)
		//you could both move and rename a file like this, with new name at the end with a suffix:  Hello.txt /documents/testFiles/hi.txt

	//special characters
		~  home directory
		..  up 1 directory
		.  current directory //you could do this to move a file to your current directory:   mv test.txt .

	//copy files
		cp (filename) (new copy name)

	//remove/delete files
		rm (filename)

	//copy directory and all files within aka recursive copy
		cp -r (directory) (newdirectory)

	//remove  directory + contents
		rm -r (directory)

	//remove empty directory
		rmdir

	//create directory
		mkdir (name)
		//note you can't create a directory in a nonexistent parent directory.  must create parent folders first, or use -p flag (below)

	//create path
		mkdir -p (path)

	//open file with specific program
		open -a "program name" crazyFile.js

	//create new file in current directory
		touch "filename.txt"

	//Bang
		!!
		//runs last command you did. 
		//If you forget to add cd/git/sudo in front of a command, you can run it again like this:
			git !!
			sudo !!
			cd !!

	//Echo repeats whatever you say
		echo "this text will be repeated to me"
		> "this text will be repeated to me"

//COMMAND LINE TEXT EDITORS

	//print a text file to terminal using a pager (1 page at a time)
		less (filename)
		//use Q to quit

	//print text to command line OR concatenate multiple text files 
		cat (filename)(filename)(filename)

	//use text editor nano
		nano (filename)
		//menu help: the carrot is ctri.  so hit control with all commands listd 
		//at bottom of terminal window

	//use text editor vim 
		vim (filename)
		//AUTHOR NOTE: I can't figure out how to save/quit from this one...

	//Other command-line text editors: emacs, vi

//FIND, GREP, SORT, cURL

	//Sort
		sort fileToSort.txt  //sorts by alphabetical string comparison

	//sort flags
		sort -n //sort numerically
		sort -r //sort in reverse

	//find files based on filename
		find searchThisDirectory -name filenameToLookFor
		find man //look at find manual

	//GREP: to search for specific text within files
		grep "searchTerm" fileToSearch.txt

	//grep flags: 
		grep -n "pat" file.txt //make grep case-insensitive (is case-sensitive by default)
		grep -i "pat" file.txt //find lines that DO NOT contain pattern
		grep -v "s" "e" file.txt //finds lines lines without e or s in them
		grep man //look at grep manual

	//if you forget to give grep a file to search, you'll get stuck in standard-input
	//ie grep will search your keystrokes for the search pattern
	//use the End-Of-File Marker to get out
		ctrl+D

	//print a web page's source code to teminal
		curl pageURL

	//cURL flags
		curl -o destination.html SourceURL //saves source code to a file you name
		curl -O URL //saves to a file of same name as original


//INSTALLING/UPDATING SOFTWARE WITH APT (LINUX) / HOMEBREW (OSX) 

	//to search for something in the package manager's internal "app store" of packages 
		apt-cache search WhatYoureSearchingFor //LINUX/Ubuntu
		brew-tap search WhatYoureSearchingFor //MacOSX

	//to install
		apt-cache install ProgramName //LINUX/Ubuntu
		brew-tap install ProgramName //MacOSX

	//to update
		apt-get update
		brew update

	//to upgrade
		apt-get upgrade //LINUX/Ubuntu
		brew upgrade //MacOSX

	//print the location of a program using PATH environment variable
	//also check if a program is installed/was installed successfully
		which proramName

	//to see homebrew Manual
		man brew


//REDIRECTION OF STANDARD IN/OUT/ERROR

	//change standard in/out (using grep as an example)
		grep "this" <input.txt >output.txt//will search for "this" in hello.txt and print results to output.txt
		grep "that" input.txt >>output.txt //will append results of grep to output.txt

	//redirect standard Error
		//redirect to a file
			find searchDirectory -name "searchTerm" 2> errors.txt
		//redirect to oblivion
			find / -name "sudoers" 2> /dev/null

//USERS/PERMISSIONS

	//name of current user
		whoami

	//switch user
		su userName

	//go back to User you started with
		exit

	//use super user privileges (often needed to install software/change some permissions)
		sudo

	//To add a new User
		sudo adduser (new username)

	//change ownner of 
		sudo chown newOwnersUsername filename

	//user Types: user, group, other (ugo)
	//permission Types: read, write, execute (rwx)
		drwxr-xr-x  =  d | rwx | r-x | r-x  
		//translation: this is a directory.  user can read/write/execute.  group and other can only read/execute

	//add a permission to a file
		chmod ugo+rwx fileName(s)

	//remove a permission from a file
		chmod ugo-rwx fileName(s)


//PROCESSES

	//list all running processes/view task manager
		top
		//press shift + ? in task manager for help menu/commands
		//capital O then (what to sort by) will sort processes by that thing
		//q to quit

	//Print out running processes (process status)
		ps

	//print out all processes (all users executing.  so not just that terminal window.  whole computer, whole server, etc)
		ps aux

	//to search all process names for a specific process
	//us ps aux and grep with a pipe 
		ps aux | grep "process name"

	//Kill a process
		kill processID  

	//kill a process more 
		kill KILL processID



//ENVIRONMENT VARIABLES

	//print all environment variables
		env

	//variable things to know
		HOME = Users/Jessica //all env variables are in all caps, contain strings
		echo $PATH 
		> Users/Jessica/Documents //use dollar sign to indicate you want variable to expand

	//to change an Environment variable
		PATH=/home/treehouse/bun:$PATH //for this session of bash only
		export PATH=/home/treehouse/bun:$PATH //for inner bash sessions
		//to set a new location to your search path indefinitely, change config file.  
		//process is different depending on system.  Research!!!

	//start inner bash
		bash
		exit //to exit inner bash



/**************  SETUP STUFF  *******************/



//HOW TO SET UP TAB COMPLETION IN MAC 

	//so terminal will finish your commands after you type a few letters.  Saves time

		cd ~  //go to home directory
		nano .inputrc //open .inputrc in nano
		//paste this text into the file:
			set completion-ignore-case on
			set show-all-if-ambiguous on
			TAB: menu-complete
		//hit ctrl+x to quit
		//save file as .inuputrc

	//open a new terminal window and tab completion will work!


//HOW TO SET UP SOFTWARE INSTALL TOOLS

	//to install software You have to use a package manager program
	//on Linux/ubuntu the package manager is called apt 
	//On OSX use Homebrew (download it from brew.sh)

	//to setup
		sudo apt-get update 
		sudo brew update //MacOSX
		//you need superuser privaleges to install software
		//updates package manager.  good to run every so often anyway

		//on LINUX/Ubuntu
		sudo apt-get update
		sudo apt-get install build-essential
		which make //finds location of the program make
		>/usr/bin/make //this means our tools were installed successfully

		//on MacOSX
		sudo brew update
		sudo brew install build-essential
		which make //finds location of the program make
		>/usr/bin/make //this means our tools were installed successfully

