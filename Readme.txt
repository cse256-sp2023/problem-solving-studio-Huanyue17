### Effective Permissions Panel
<b>Step 2: show the panel</b>
Question: What is the code necessary to build and display the effective permissions panel?
Answer: 
let perm_id_prefix = "generated_permission"
let new_panel = define_new_effective_permissions(perm_id_prefix, add_info_col = true, which_permissions = null)
$('#sidepanel').append(new_panel)

Question: Which permissions does the administrator have for /C?
All permissions.

Step 2.5: Try a different filepath
Question: What does the html look like for your effective permissions panel now?
<button class="ui-button ui-widget ui-corner-all permbutton" path="/C/presentation_documents/important_file.txt" id="/C/presentation_documents/important_file.txt_permbutton"> 
    <span class="oi oi-lock-unlocked" id="/C/presentation_documents/important_file.txt_permicon"></span> 
</button>
This time, we only have the permissions: read permissions, change permissions, take ownership.

Step 3: add a user selector
Question: What is your js code to create and add the user selection button/dialog?
let user_id_prefix = "user_selected_btn"
let select_button_text = "User Select"
let sel_section = define_new_user_select_field(user_id_prefix, select_button_text, on_user_change = function(selected_user){})
$('#sidepanel').prepend(sel_section)

Step 4: Connect the user selector and the effective permissions
Question: What does the completed line to create the user select field look like?
The effective permissions panel displays the permissions for that hard-coded file, for any user we choose.
-If we set file path="/C". After clicked the button 'User Select' that we created on the step 3, 
selected 'administrator' and clicked 'OK',  Then the username ('administrator') appeared on the 
dialog before the button. And all permissions are open to the selected user on the checkbox. While
for other employees, they don't have any permission.

-If we set the file path="/C/presentation_documents/important_file.txt". When we selected as 
'administrator', the permissions ('read permissions', 'change permissions', 'take ownership') are 
open on the checkbox. When we selected 'employee 1', all permissions except 'traverse folder
/execute file' are open. When we selected 'employee 2' or 'employee 3', all permissions except 
'traverse folder/execute file', 'change permissions', 'take ownership' are open.


### Permissions Explanation
Step 2: Open the dialog on click
Question: What does your initial click listener look like?
Each time I click one of the info icons, the console will print out "clicked!", and a 
dialog with the corresponding title and permission explanation content are show up.

Step 3: Log useful information
Question: What does your full console log method look like (please include its class selector)?
coding:
let perm_type =  $(this).attr('permission_name')
console.log("clicked!")
console.log(perm_type)
console.log($('#generated_permission').attr('filepath'), $('#generated_permission').attr('username'))

Dev Console: click 'i' icon of "write attributes".
clicked!
write attributes
/C administrator

Step 4: Get and display explanation
Question: What does your final click handler look like?
(1) A "take ownership" permission for an administrator
Selected parameters: take ownership, /C, administrator
Dialog: 
    title:Take Ownership
    content: - Allows or denies taking ownership of the file or folder. The owner of a file or folder can always change permissions on it, regardless of any existing permissions that protect the file or folder.
            Action allowed?: true; Because of permission set for file: /C and for user: N/A (This user is the file owner or an administrator)
(2) Any permission for anyone that's not an administrator on /C
Selected parameters: read attribution, /C, employee 2
Dialog:
    title: Read Attribution
    content:- Allows or denies viewing the attributes of a file or folder, such as read-only and hidden. Attributes are defined by NTFS file system.
            Action allowed?: false; Because of permission set for file: N/A and for user: N/A (No permissions found for this file and user)
(3) An inherited permission (this will only exist for some tasks)
Selected parameters: delete subfolders and files, /C/presentation_documents/important_file.txt, employee3
Dialog:
    title: Delete subfolders and files
    content:- Allows or denies deleting subfolders and files, even if the Delete permission has not been granted on the subfolder or file.
            Action allowed?: true; Because of permission set for file: /C/presentation_documents and for user: employee3
(4) A permission set for a group, looking through the effective permissions of a member of that group (this will only exist for a couple of the tasks)
Selected parameters:
Dialog:
    title: 
    content: