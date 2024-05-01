# create react app 
     -- npx create-react-app weekday 
# setup redux
    --npm install react-redux 
    --npm install @reduxjs/toolkit
# setup tailwindcss 
   --npm install -D tailwindcss
   --npx tailwindcss init
# Development 
    -Header(Based on api selecting filters )
      -Role (frontend,backend,techlead,andriod,ios)--> drop down with multiple item selection
      -Location (remote ,chennai delhi ncr,mumbai)--> drop down with multiple item selection
      -Experience 
      -min Base Salary
      -No of Employees (data is not provided in the given sample api)
    -Body
      -Job list 
        - list of Job cards 
           -company logo (Not provided in api instead i have week day logo found on chrome to have good UI)
           -Company name (it is not not present )
           -Role
           -Location 
           -Salary Range in USD 
           -Description about Company 
           -Minimum Experience 
           -Easy Apply Button
           -Referral BUtton 