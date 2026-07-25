# 1. Initialize git in your project folder (if not already done)
git init

# 2. Stage all your React project files
git add .

# 3. Commit your files with an initial message
git commit -m "Initial commit"

# 4. Rename your default branch to "main" (GitHub's standard branch name)
git branch -M main

# 5. Link your local project to your online GitHub repository
# (Replace the URL below with the repository URL you copied in Step 1)
git remote add origin https://github.com/safiq2018mridha-wq/copy

# 6. Push your local code to the GitHub repository
git push -u origin main
