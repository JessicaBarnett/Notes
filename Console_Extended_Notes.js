//BASIC COMMAND LINE COMMANDS

	//if you get stuck in standard-input like I do all the time 'cus I forget quotes
		ctrl+D

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

	//print a text file using a pager (1 page at a time)
		less (filename)
		//use Q to quit

	//print text to command line or concatenate multiple text files 
		cat (filename)(filename)(filename)

	//use text editor nano
		nano (filename)
		//menu help: the carrot is ctri.  so hit control with all commands below
		//Other command-line text editors include emacs and vim or vi

//HOW TO SET UP TAB COMPLETION IN MAC 
	//so terminal will finish your commands after you type a few letters.  saves time

	//open .inputrc in nano in the home directory

	//set completion-ignore-case on
	//set show-all-if-ambiguous on
	//TAB: menu-complete

	//paste these lines and save as .inputrc
	//open a new terminal window and tab completion will work!

//ADD AND REMOVE USERS

	//patch for setting up users? (see treehouse)
		curl -l trhou.se/patch1 | bash

	//Name of current User
		whoami

	//To add a new User
		sudo adduser (new username)
		//(will ask for password)
		//(will ask for new user's password)
		//(will ask for other information: name, room number, etc.  just hit enter to leave it blank)
		//(will ask if info is okay.  press y or n)

		//Note: Y/n - cap Y means Y is default answer, and if you hit enter you'll get yes

	//switch user
		su (username)
		//(will ask for password)

	//go back to user you started with/ end current session?
		exit


//PERMISSIONS

	//3 types of permissions: Read / write / execute ( r w x)
	//3 types of users: users, group, and other (u / g / o)
	//different sets of permissions can be set for each group
	//So possible permissions include: 

	// 		  User(U)
	// Read(R)   Write(W)  Execute(X)

	// 		  Group(G)
	// Read(R)   Write(W)  Execute(X)

	// 		  Other(O)
	// Read(R)   Write(W)  Execute(X)

	// Show detailed system files (including permissions)
	// 	ls -l

	// Reading the details:
	// directory   ||   User (file owner)	||	Group (group owner)	 ||	Other
	// 	d  		  			rwx  					rwx 	  		 r-x	

	//change a file's permission
		//chmod (UGO)(+ or - for add or remove permission)(RWX) (file name)
		//examples: 
			chmod o+w hello.txt  //(adds write to the hello.txt file for Others)
			chmod +x hello.class //(adds Execute to User, Group, and Other)

	// Permissions are often represented by Octal numbers (so 10 = 8.  1 eight and 0 ones.  17 is 15.  1 eight and 7 ones)

	// 7(4+2+1)		r w x 			3(0+2+1)		- w x
	// 6(4+2+0)		r w - 			2(0+2+0)		- w -
	// 5(4+0+1)		r - x 			1(0+0+1)		- - x
	// 4(4+0+0)		r - - 			0(0+0+0)		- - -

	// r = 4 	w = 2 	 x = 1

	// you can also change permission like this, using Octal Numbers:
		chmod 777 hello.txt //gives all users rwx ability 
		//r=4, w=2, x=1, 4+2+1=7, each user gets a 7.  hence 777

	//same as this, which uses +/- to add/remove permission, as above
		chmod +rwx hello.txt 	

	//another example 
		chmod 640 hello.txt //(users can read/write, group can read, others can't do anything)

	//change ownership
		sudo chown (new Owners username) (filename)
		//sudo overrides any permissions.  asks for password

	// What is sudo?
	// run a command as a super user/as if you are the root user
	// working from the root user isn't ideal because it is dangerous (root is all-powerful), problematic if you forget to log out of root, problematic if you have multiple people working on root…  

	//Bang
		!!
		//runs last command you did.  good way to add sudo to a command if you forgot

//PROCESSES

	//to list all running processes/view task manager
		top
		//press shift + ? in task manager for help menu/commands
		//capital O then (what to sort by) will sort processes by that thing
		//q to quit

	//Print out running processes (process status)
		ps

	//print out all processes (all users executing.  so not just that terminal window.  whole computer, whole server, etc)
		ps aux

	//if looking for a specific process (maybe to get the PID/Process id):
		ps aux | grep "process name"
		//grep is a utility that searches for patterns, I think...

	//pause process
		hold ctrl+z when in top or nano or another program/process
		//this will pause it and show you the paused jobs details

	//to see all paused jobs details
		jobs
	         //returns
	         [job number]+ state programName file
		//the + means this program will run by default if you run the fg command with no details, and there are multiple jobs.  a - means otherwise.

	//to resume last job closed use foreground
		fg

	//to resume a specific job, tack job # on the end 
		fg 1
		
	//Call a new process immediately to the background in the stopped state
		processname &

//KILLING PROCESSES

	//if your terminal didn't start a process, like maybe it's a server process or was started in another window, or by another program, then these options will be necessary.  

	//kill a process lite (Send a signal to the process to stop)
		// steps
		// 1) find Process Id via top or grep
		// 2) check permissions.  can a regular user do this?  Do you need sudo?
		// 3) make SURE it's the right process
		//4) 
			kill processID  //(sends TERM or terminate signal to server/computer by default)
		//5) another way to say it: 
			kill TERM processID   or   kill SIGTERM processID   //depending on system

	//kill a process heavy (process cannot stop itself from closing.  useful when process gets to point where it isn't even hearing your TERM signals)
		
		kill KILL processID
			or
		kill SIGKILL processID (dep. on system)
			or
		kill -9 processID

	//means turn off immediately, nothing process can do about it.  May leave corrupted data if killed process is still working when killed.
	//with full-window apps, cursor will move to top of the program text, like above the top text, and when you type text will appear over top of the old text.  It's like kill is behaving like the process never happened.  And there's no cleanup.   weird but cool.

	//you can also stop a process and move it to bg instead of just killing it.  does same weird cleanup thing as kill KILL

		kill -STOP


//ENVIRONMENT VARIABLES

	//environment variables:  names are all caps, only contain strings

	//print all environment variables
		env

	//Echo basically repeats whatever you send it.  
		echo "hello"
		>hello

	//use unexpanded variable with a dollar sign to indicate you want it to expand
		echo $home
		>Users/Jessica

	//to set a new value to an env var, no dollar sign or spaces.  remember, all caps
		PATH="Users/Jessica/Documents"
		>PATH will equal Users/Jessica/Documents
		//you create new local vars the same way.  Will not be accessible to children/inner bash sessions

	//PS1 is a var used to customize your prompt.  
	//so the treehouse ~ $ in the treehouse vid has a PS1 equal to \u \w $  (user  workingDirectory dollarSign)

	//note: this only changes env variables in that session of bash.  
		//if you start a new session within that session
			bash
		//variables will look like they reverted.  if you end that session
			exit
		//they will change back

	//to create pass-down-able new variables (will be available to inner bash sessions/child bash sessions), Export them
		export MESSAGE="hello word"

	//print the location of a program
		which proramName
		ex: which echo
			>/bin/echo
		     which nano
			>usr/bin/nano

	//you can also run programs using their absolute path instead of their filename
		/bin/echo "Repetez-vous"
		>"Repetez-vous"

	//the order of places bash looks for program files using which is stored in PATH
	$PATH= /usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/X11/bin:/usr/local/git/bin:/usr/X11/bin: no such file or directory

	//if you want another directory to be searched for programs, you can add it to PATH
		//add new pathlet at front and bash will look there first.  use export and it will be available to all
		export PATH=/home/treehouse/bun:$PATH
		//will only work as long as that session is running.  when session closes path will be reconfigured to default value

	//to make a change that will exist for new sessions, change the config file

		//use ls -la to see all files, hidden files, and permissions
		//find .bashrc (sometimes .profile,  or your system's version of it.  may be issues…)
		//open with nano
		//add 
			export PATH=newPath/bin:$PATH
		//this will make all new terminal sessions share this change
		//usually you would do this because a program you're installing has asked you to.


//FIND AND GREP

	//find files based on filename
		find (directory(s) to start search from) -name (filename to find)
		//exampes
			find . -name "test.txt" //finds test.txt starting in the current directiory
			find / -name "sudoer" //finds program sudoer starting at root
			find documents bin -name "test.txt" //looks for test.txt in both documents and bin 
		//sometimes permission denied messages come up if you don't have permission to read a file

		//look at find manual
			find man

	//search for specific text within files: use grep (global regular expressions print)
		grep "is" hello.txt //finds string "is" in hello.txt.  prints all lines containing "is", usually with "is" highlighted

		//grep w/ line numbers
			grep -n "pat" file.txt

		//make grep case-insensitive (is case-sensitive by default)
			grep -i "pat" file.txt

		//find lines that DO NOT contain patterb
			grep -v "s" "e" file.txt //prints lines without e or s in them

		//look at grep manual
			grep man

//PIPES AND REDIRECTION
	//basically, you use pipes to chain commands together.  They each pass their output as the input of the next command, and so on.

	//exmple from before: looks for a pattern in a filename? 
		ps aux | grep init

	//Standard in/out
		//standard in = keyboard
		//standard out = screen
		//this can be changed!!
		//unix programs almost always use plain text as input and output.  if that weren't true, this wouldn't work

		//if you enter: 
			grep "hello" //(with no file to search)

			//it will go into theis weird mode where you can't seem to do anything.  
			//what's actually happening is grep is waiting for input from std in (your keyboard) and will repeat any line you send in that has "hello" in it.  

			//to exit, type the end-of-file marker,
				Ctrl+D

		//to use a file as standard in, use the less than sign
			grep "this" <hello_grep.txt
			//in this case, essentially the same as typing grep "this" hello_grep.txt...  still good to know tho.

		//to use a file as standard out, use the greater than sign
			grep "that" hello_grep.txt >goodbye_grep.txt
			//sometimes you can also use the -o flag to set std Output
			//will create a new file with that name in current directory if there isn't ont

		//use 2 greater than signs to append new output to the file, rather than overwrite it
			grep "that" hello_grep.txt >>goodbye_grep.txt

		//to change std in AND std out
			grep "hello" <hello_grep.txt >goodbye_grep.txt
			//you won't see anything if you run this, but grep will look for "hello" in hello_grep.txt and print all finds in goodbye_grep.txt


	//Standard Error 
		//error messages that show up when you, for example, don't have permission to search a file.  
		//also prints to terminal.  can be sent to a file instead.

		//redirect stream #2 (standard error) to a file
			find / -name "sudoers" 2> errors.txt
			//you can delete it after like so
				rm errors.txt

		//to redirect stream #2 to oblivion (not create a temp file, and not see it either) do this
			find / -name "sudoers" 2> /dev/null

//SORT

	//sort process by alphaetical string comparison (default)
		sort

	//sort numerically
		sort -n

	//sort in reverse
		sort -r 

	//for multi-column input like from top, sort column 2 numerically 
		top | sort -k 2
		//columns must be space-separated for this to work

	//example from wikipedia
		$ cat quota
			fred 2000
			bob 1000
			an 1000
			chad 1000
			don 1500
			eric 5000

		$ sort -k2n,2 -k1,1 quota
			an 1000
			bob 1000
			chad 1000
			don 1500
			fred 2000
			eric 5000	

	//applies 2 sorts, first numerically using column 2 (-k2n,2) 
	//and the second alphabetically(default) using column 1 (-k1,1)
	//I think the ,2  and ,1 mean to start AND END in column 2 and 1.  seems to work either way though...

	//to sort a tab-separated file, use a tab escape character like this:
	$ sort -k2,2 -t $'\t' phonebook 


//PIPING

	//std out of one process becomes std in of next
		ps aux | grep bash 
		//ps aux gets names of all processes on computer/server
		//grep searches those names for bash and returns them

	//can be used with piping like this 
		ps aux | grep bash | sort
		//names of running processes get passed to grep, 
		//which filters all the processes without bash and passes to sort, 
		//which sorts alphabetically

//cURL (a url transfer library)
	//a program used to make requests form the internet

	curl (url)
		//will output page's source code to terminal

	curl -o (destination.html) (source url) 
		//will output source's code to destination file

	curl -O (url) //the -O (capital) will save to a file of the same name as the source on your computer
		//note - use right click, paste instead of ctrl v in a web-based console like treehouse's


//MANUAL SOFTWARE INSTALL WITH TERMINAL
	//example: install sql lite on an ubuntu linux machine
	//note: commands will be different system to system
	//in mac, use brew instead of apt-get.  
	
	//to see homebrew manual
		man brew

	//setup
		sudo apt-get update 
		//you need superuser privaleges to install software
		//updates package manager.  good to run every so often anyway

		sudo apt-get install build-essential
		//installs build-essential

	//JESSICA!!!  you have installed homebrew.  so you use brew instead of apt-get
		sudo brew update
		sudo brew install build-essential
		which make //finds location of the program make
		>/usr/bin/make //this means our tools were installed successfully

	//installing 
		mkdir sqllite
		cd sqllite
		curl -O "http://www.sqllite.org" //url of sqllite source code
		//unzip tarball as below in the tarball section
		cd (untarred sqllite file)

		//run configure
		./configure //without the ./ computer will look elsewhere for the configure file.  you need it!!
		//this should make a make file, which specifies how to build the program
		//be in the file with make in it, the run: 
		make
		//program exe/dmg are built/compiled now, but they aren't installed.
		//to install
		sudo make install //need sudo because program may need to install files where our user doesn't have permissions


//SOFTWARE INSTALL WITH A PACKAGE MANAGER
	//this is the better option: use an automated packaging manager 
	//handles dependencies, updates, uninstalling, and makes things plain old easy
	//on Ubuntu linux and other Debian-based systems, the package manager is called apt (advanced packaging terminal)
	//on macosx, we use homebrew!!!  

	//I think this is true
	//package manager has all of these things in is, or has links to them.  
	//To all these common programs that come with packages.  when you search, you're searching the manager for a package

	//command compare
	apt: apt-cache
	Homebrew: brew-tap

	//to search for something ((WHERE ARE WE SEARCHING THOUGH???))
	apt-cache search PATTERN

	//to install
	apt-cache install PROGRAM

	//it will tell you about other packages that will be installed (dependencies), and packages that will complement the set
	//tells you the disk space that will be used

	//after you run an update, you might want to run:
	apt-get upgrade
		//which will get new versions of things, security patches and whatnot

	//to uninstall
	sudo apt-get remove (prog name)
		//won't uninstall other things that were installed when you installed this program

	//to get rid of dependent programs afterwards
	apt-get autoremove


//COMPILE JAVA PROGRAM

	javaC helloWorld.java
	//creates .class file with same name
	java(helloWorld)
	//calls program without .class extension

