
//EXAMPLE FROM GITHUB
	//Create a new repository with the Terminal, add a file, and commit it
		touch README.md
		git init
		git add README.md
		git commit -m "first commit"
		git remote add origin https://github.com/JessicaBarnett/Playingwithgithub.git
		git push -u origin master

	//push an existing repository from the command line to a blank repo on gihub
		git remote add origin https://github.com/JessicaBarnett/Playingwithgithub.git
		git push -u origin master

//COMMITTING

	//see all changed files, new files, untracked files, staged files, unstaged files, 
	//current branch, commits that haven't been pushed to master yet, etc
		git status 

	//turn current folder into a local repositpry (add .git file)
		git init optionalRepoName

	//to delete a .git folder 
		rm -r .git //-r because it's recursive

	//To add a file which has been changed to the staging area
	//to add a new file to git's "I'm tracking these" list
		git add (filename)

	//to remove a staged file from the staged list
		git rm --cached fileName

	//to commit all staged files and create message all at once
		git commit -a -m "my commit message goes here"

	//to change your name/e-mail before commiting, so people looking at your commits know who did what
		git config --global user.name "YourName"
		git config --global user.email "YourEmail"

//LOOKING AT YOUR HISTORY

	//to see your commit history
		git log

	//to go back in time and see your project at a particular commit
		git checkout idHash
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


//WORKING WITH BRANCHES

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

//MERGING

	//to merge a branch **into your current branch**
		git merge BranchToMerge

	//In case of merge conflict!!!
		//open 'flicted file in nano.  You'll see this mess:
			<<<<<<< HEAD //beginning of conflict, starting with last commit in current branch (HEAD)
			======= //separator between two versions of conflicted file
			>>>>>>> BRANCHNAME //end of conflict
		//clean up and resolve conflict yourself.  Save.  
		//add and commit changed file as per usual
			git add conflictedFile.txt
			git commit

//WORKING WITH REMOTE REPOSITORIES 

	//clone a project to your computer
		git clone(url) optional_name_for_cloned_repository

	//merge all changes to/from remote repo
		git push/git pull

	//add a branch to a remote repository
		git push origin BranchName

	//copy a branch to a remote repository
		git pull origin BranchName

	//see remote repositories
		git remote

	//add a remote repo to your local repo manually
		git remote add LinkToRepo


