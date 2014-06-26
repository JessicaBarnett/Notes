//GITHUB SETUP STUFF

	//the easy way (for me)
		//On OXS, I just installed Homebrew (a package mnager.  Helps install software from the command line)
		//and then, in the console, ran 
			brew install git
		//it pretty much did everything for me


	//to switch git's default text editor to nano
		git config --global core.editor nano
		//documentation here: http://git-scm.com/docs/git-config



//SETUP FOR WINDOWS
	//ou can download git bash for windows here: http://git-scm.com/downloads


//REPOSITORIES AND COMMITTING

	//see all changed files, new files, untracked files, staged files, unstaged files, 
	//current branch, commits that haven't been pushed to master yet, etc
		git status 

	//turn current folder into a local repositpry (add .git file)
		git init

	//create a new reposiroty folder in current directory
		git init newRepoName

	//to delete a .git folder 
		rm -r .git //-r because it's recursive

	//To add a file which has been changed to the staging area
	//to add a new file to git's "I'm tracking these" list
		git add (filename)

	//to remove a staged file from the staged list
		git rm --cached fileName

	//to commit all files (including unstaged files, not including untracked files, I think...)
		git commit
		//Jess's note: On osx this opens your commit message in the vim text editor (like nano but annoying?), 
		//which I can't figure out how to use... 
		//use git commit with the -m flag (below) to avoid.  
		//make a note to figure out vim...

	//to commit and create message all at once
		git commit -m "my commit message goes here"

	//to commit all changes it can find (also unstaged ones, I think?)
		git commit -a

	//Do both if you want
		git commit -a -m "Another commit message yay!!!"

	//to change your name/e-mail before commiting, so people looking at your commits know who did what
		git config --global user.name "YourName"
		git config --global user.email "YourEmail"

//LOOKING AT YOUR HISTORY

	//to see your commit history
		git log
		//the long crazy string of numbers you see is called a commit identifier or hash
		//it's how you reference a specific commit

	//to go back in time and see your project at a particular commit
		git checkout first-5-or-so-characters-of-the-identifier-hash
		//then you're in detached head state.  Huzzah!  
		//if you want to make changes, make a new branch.  you might mess up stuff otherwise.

	//to get back to master
		git checkout master

	//to get to the last commit you made
		git checkout HEAD

	//to get to the commit before the last commit you made
		git checkout HEAD~1

	//to compare changes between two commits
		git diff commitID1 commitID2
		//opens in less text editor.   Use Q to quit.
		//it's a little hard to read.  Using sourcetree for comparing commits is a good idea


//WORKING WITH BRANCHES

	//Jess Note: several people have suggested to me that using the app SourceTree for branch management 
	//is a good idea.  

	//create a new branch (based on the branch you're currently in)
		git branch NewBranchName

	//switch to a different branch (will go to latest commit/HEAD commit of that branch)
		git checkout BranchName

	//to create and switch to a new branch in one command
		git checkout -b NewBranchName

	//to see all branches in a project(with current branch starred)
		git branch

	//to delete a branch
		git branch -D BranchName
		//Note: you can't be inside the branch you're deleting!!!

	//Merging Branches
		//merges a branch's commit log and files into the current branch.    

	//to merge a branch **into your current branch**
		git merge BranchToMerge

	//Notes about merging conflicts
		//Git can resolve conflicts when a file is changed in both branches, but changed in places where it doesn't conflict
			//example: if you change the title of an html file in one branch, and change the footer in another branch.  
			//new file will have both title and footer changed
		
		//if there is a change made to the same line in the same file on both branches, git's merge attempt will fail
			//git will merge everything else as normal, and tell you which files had issues
			//it will edit the conflicted file, showing both versions with punctuation to show where the conflict is
				<<<<<<< HEAD //beginning of conflict, starting with last commit in current branch (HEAD)
				======= //separator between two versions of conflicted file
				>>>>>>> BRANCHNAME //end of conflict

			//you can open the conflicted file with nano
				nano conflictedFile.txt

			//edit the file so that it is how you like it.  save.
			//add change to staging area and commit, so git knows we resolved the conflict
				git add conflictedFile.txt
				git commit

//WORKING WITH REMOTE REPOSITORIES 

	//remote repositories work very much like branches, in that you can merge their histories/files

		//To merge ALL changes in local repository with the remote repository
			git push
			//note: it might tell you you don't have an up-to-date copy of the remote master branch 
			//to fix this, run git pull first (see below)

		//to merge the changes on the remote repository with the local repository on your machine
			git pull

		//clone a project to your computer
			git clone(url) optional_name_for_cloned_repository
			//when you clone a repository, git sets the parent repository as a remote repository called origin 
			//so you can push to/pull from it.  
			//DOES NOT add child as remote of the parent

		//see remote repositories (there can be)
			git remote

		//add a remote repository manually, so they can talk to each other
			git remote add LinkToRepo

		//add a remote repo with a name (?)
			git remote add OptionalRepoName LinkToRepo

		//add a branch to a remote repository
			git push origin BranchName
			//remember you might need to pull first!!

		//copy a branch to a remote repository
			git pull origin BranchName

		//change url of a remote repository (if you change its name, for example)
			git remote set-url origin new_url

//A COUPLE SAMPLES FROM GITHUB

	//Create a new repository with the Terminal, add a file, and commit it

		touch README.md
		git init
		git add README.md
		git commit -m "first commit"
		git remote add origin https://github.com/JessicaBarnett/Playingwithgithub.git
		git push -u origin master

	//push an existing repository from the command line

		git remote add origin https://github.com/JessicaBarnett/Playingwithgithub.git
		git push -u origin master


//TARBALL COMPRESSED FILES (used on github)

	//To unzip a tarball file:

		tar xvzf filename.tar.gz

	//to create a tarball file: 

		mkdir myproject-0.1
		mv filename ~/myproject-0.1
		tar zcvf myproject-0.1.tar.gz myproject-0.1

	//to create a tarball file without MacOS hidden files (you still get some hidden files though, not as many...)

		COPYFILE_DISABLE=true tar zcvf myproject-0.1.tar.gz myproject-0.1/

	//to see all files in a tarball

		tar ztvf myproject-0.1.tar.gz



//SSH KEYS
	//make a new ssh key
		cd ~/.ssh
		ssh-keygen -t rsa -C "YourEmail@email.com"
		>Generating public/private rsa key pair.
		>enter file in which to save the key:
		.ssh/id_rsa
		//it will give you a key fingerprint and a randomart image

	//then go to the github website
	//under your account settings, go to ssh key, add ssh keys
	//name it whatever you want.  Possibly name it after the computer you're using?

	//in the command line
	ls -a //to see files
	//should be one called id_rsa.pub
	vim id_rsa.pub //open with vim text editor
	//copy the ssh key in that file and paste it into the ssh key box on the github site.

	//to finish the job:
		sst -T git@github.com
		//will  prompt for your ssh password

	//then change the user/email for all commits on your computer
		git config --global user.name "github username"
		git config --global user.email "email"

	//after you make a new ssh key, you may have to change the urls of your remote repositories, 
	//to use the ssh key instead of the public url.  If you have problems pushing to master, try that.
