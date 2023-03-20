
// ---- Define your dialogs  and panels here ----
// Panel: checkbox + selector
// Set id_prefix for checkbox
let perm_id_prefix = "generated_permission"
let new_panel = define_new_effective_permissions(perm_id_prefix, add_info_col = true, which_permissions = null)
// Show a sidepanel of permissmissions (checkbox)
$('#sidepanel').append(new_panel)
//**hardcode the filepath here**
$('#generated_permission').attr('filepath', '/C/presentation_documents/important_file.txt')

// Set id_prefix for selector
let user_id_prefix = "user_selected_btn"
let select_button_text = "User Select"
let sel_section = define_new_user_select_field(user_id_prefix, select_button_text, on_user_change = function(selected_user){
    $('#user_selected_btn').attr('username', selected_user)
    $('#generated_permission').attr('username', selected_user)
})
// Add an interface element to allow us to select a user. (selector)
$('#sidepanel').prepend(sel_section)

// Dialogs for 'i' icons
// Step 1: Define the dialog
let permission_traverse_folder_execute_file = define_new_dialog('generated_permission_traverse_folder_execute_file_dialog', title = 'Traverse Folder/Execute File', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_list_folder_read_contents = define_new_dialog('generated_permission_list_folder_read_contents_dialog', title='List Folder/Read Contents', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_read_attributes = define_new_dialog('generated_permission_read_attributes_dialog', title='Read Attribution', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_read_extended_attributes = define_new_dialog('generated_permission_read_extended_attributes_dialog', title='Read Extended Attributes', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_create_files_write_data = define_new_dialog('generated_permission_create_files_write_data_dialog', title='Create Files/Write Data', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_create_folders_append_data = define_new_dialog('generated_permission_create_folders_append_data_dialog', title='Create Folders/Append Data', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_write_attributes = define_new_dialog('generated_permission_name_write_attributes_dialog', title='Write Attributes', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_write_extended_attributes = define_new_dialog('generated_permission_name_write_extended_attributes_dialog', title='Write Extended aAttributes', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_delete_subfolders_and_files = define_new_dialog('generated_permission_name_delete_subfolders_and_files_dialog', title='Delete Subfolders and files', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_delete = define_new_dialog('generated_permission_name_delete_dialog', title='Delete', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_read_permissions = define_new_dialog('generated_permission_name_read_permissions_dialog', title='Read', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_change_permissions = define_new_dialog('generated_permission_name_change_permissions_dialog', title='Change Permissions', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
let permission_take_ownership = define_new_dialog('generated_permission_name_take_ownership_dialog', title='Take Ownership', {
    buttons: {
        OK: {
            text: "OK",
            id: "explain_ok_button",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    }
})
//Make the div with the explanation about permission:
traverse_folder_execute_file_div = $("<div> - Traverse Folder allows or denies moving through folders to reach other files or folders, even if the user has no permissions for the traversed folders (applies to folders only). Execute File allows or denies running program files (applies to files only).</div><br><hr><br><div class='dia_explain'></div>")
list_folder_read_contents_div = $("<div> - List Folder allows or denies viewing file names and subfolder names within the folder (applies to folders only). Read Data allows or denies viewing data in files (applies to files only).</div><br><hr><br><div class='dia_explain'></div>")
read_attributes_div = $("<div> - Allows or denies viewing the attributes of a file or folder, such as read-only and hidden. Attributes are defined by NTFS file system.</div><br><hr><br><div class='dia_explain'></div>")
read_extended_attributes_div = $("<div> - Allows or denies viewing the extended attributes of a file or folder. Extended attributes are defined by programs and may vary by program.</div><br><hr><br><div class='dia_explain'></div>")
create_files_write_data_div = $("<div> - Create Files allows or denies creating files within the folder (applies to folders only). Write Data allows or denies making changes to the file and overwriting existing content (applies to files only).</div><br><hr><br><div class='dia_explain'></div>")
create_folders_append_data_div = $("<div> - Create Folders allows or denies creating folders within the folder (applies to folders only). Append Data allows or denies making changes to the end of the file but not changing, deleting, or overwriting existing data (applies to files only).</div><br><hr><br><div class='dia_explain'></div>")
write_attributes_div = $("<div> - Allows or denies changing the attributes of a file or folder, such as read-only or hidden. Attributes are defined by NTFS.</div><br><hr><br><div class='dia_explain'></div>")
write_extended_attributes_div = $("<div> - Allows or denies changing the extended attributes of a file or folder. Extended attributes are defined by programs and may vary by program.</div><br><hr><br><div class='dia_explain'></div>")
delete_subfolders_and_files_div = $("<div> - Allows or denies deleting subfolders and files, even if the Delete permission has not been granted on the subfolder or file.</div><br><hr><br><div class='dia_explain'></div>")
permission_delete_div = $("<div> - Allows or denies deleting the file or folder. If you do not have Delete permission on a file or folder, you can still delete it if you have been granted Delete Subfolders and Files on the parent folder.</div><br><hr><br><div class='dia_explain'></div>")
permission_read_div = $("<div> - Allows or denies reading permissions of the file or folder, such as Full Control, Read, and Write.</div><br><hr><br><div class='dia_explain'></div>")
change_permissions_div = $("<div> - Allows or denies changing permissions of the file or folder, such as Full Control, Read, and Write.</div><br><hr><br><div class='dia_explain'></div>")
take_ownership_div = $("<div> - Allows or denies taking ownership of the file or folder. The owner of a file or folder can always change permissions on it, regardless of any existing permissions that protect the file or folder.</div><br><hr><br><div class='dia_explain'></div>")
permission_traverse_folder_execute_file.append(traverse_folder_execute_file_div)
permission_list_folder_read_contents.append(list_folder_read_contents_div)
permission_read_attributes.append(read_attributes_div)
permission_read_extended_attributes.append(read_extended_attributes_div)
permission_create_files_write_data.append(create_files_write_data_div)
permission_create_folders_append_data.append(create_folders_append_data_div)
permission_write_attributes.append(write_attributes_div)
permission_write_extended_attributes.append(write_extended_attributes_div)
permission_delete_subfolders_and_files.append(delete_subfolders_and_files_div)
permission_delete.append(permission_delete_div)
permission_read_permissions.append(permission_read_div)
permission_change_permissions.append(change_permissions_div)
permission_take_ownership.append(take_ownership_div)

// Step 2: Open the dialog on click
$('.perm_info').click(function(){
    
    console.log("clicked!")
    let selected_name = this.id.slice(10, -10)
    let perm_type =  $(this).attr('permission_name')
    let dialog_selected = null

    if (selected_name === "permission_traverse_folder_execute_file") {dialog_selected = permission_traverse_folder_execute_file}
    if (selected_name === "permission_list_folder_read_contents") {dialog_selected = permission_list_folder_read_contents}
    if (selected_name === "permission_read_attributes") {dialog_selected = permission_read_attributes}
    if (selected_name === "permission_read_extended_attributes") {dialog_selected = permission_read_extended_attributes}
    if (selected_name === "permission_create_files_write_data") {dialog_selected = permission_create_files_write_data}
    if (selected_name === "permission_create_folders_append_data") {dialog_selected = permission_create_folders_append_data}
    if (selected_name === "permission_write_attributes") {dialog_selected = permission_write_attributes}
    if (selected_name === "permission_write_extended_attributes") {dialog_selected = permission_write_extended_attributes}
    if (selected_name === "permission_delete_subfolders_and_files") {dialog_selected = permission_delete_subfolders_and_files}
    if (selected_name === "permission_delete") {dialog_selected = permission_delete}
    if (selected_name === "permission_read_permissions") {dialog_selected = permission_read_permissions}
    if (selected_name === "permission_change_permissions") {dialog_selected = permission_change_permissions}
    if (selected_name === "permission_take_ownership") {dialog_selected = permission_take_ownership}
    console.log(permission_take_ownership.html())
    // Step 3: Log useful information
    console.log(perm_type)
    let filepath =  $('#generated_permission').attr('filepath')
    let user =  $('#generated_permission').attr('username')
    console.log(filepath, user)
    // Step 4: Get and display explanation
    let my_file_obj_var = path_to_file[filepath]
    let user_obj_var = all_users[user]
    //console.log(my_file_obj_var, user_obj_var)
    // Get whether the action is allowed, and the explanation for why
    let check_action_explanation = allow_user_action(my_file_obj_var, user_obj_var, perm_type, explain_why = true)
    // Get a (very simple) text representation of a permissions explanation
    // Challenges / bonus ideas
    //let explain = get_explanation_text(check_action_explanation)
    //dialog_selected.append(explain)
    $('div.dia_explain').text(getExplanationText(check_action_explanation))
    //dialog_selected.append(getExplanationText(check_action_explanation))
    dialog_selected.dialog('open')
    
})

// ---- Display file structure ----

// (recursively) makes and returns an html element (wrapped in a jquery object) for a given file object
function make_file_element(file_obj) {
    let file_hash = get_full_path(file_obj)

    if(file_obj.is_folder) {
        let folder_elem = $(`<div class='folder' id="${file_hash}_div">
            <h3 id="${file_hash}_header">
                <span class="oi oi-folder" id="${file_hash}_icon"/> ${file_obj.filename} 
                <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
                    <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"/> 
                </button>
                <button class="ui-button ui-widget ui-corner-all perfilembutton" path="${file_hash}" id="${file_hash}_permfilebutton"> 
                    select
                </button>
            </h3>
        </div>`)

        // append children, if any:
        if( file_hash in parent_to_children) {
            let container_elem = $("<div class='folder_contents'></div>")
            folder_elem.append(container_elem)
            for(child_file of parent_to_children[file_hash]) {
                let child_elem = make_file_element(child_file)
                container_elem.append(child_elem)
            }
        }
        return folder_elem
    }
    else {
        return $(`<div class='file'  id="${file_hash}_div">
            <span class="oi oi-file" id="${file_hash}_icon"/> ${file_obj.filename}
            <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
                <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"/> 
            </button>
            <button class="ui-button ui-widget ui-corner-all permfilebutton" path="${file_hash}" id="${file_hash}_perfilembutton"> 
                select
            </button>
        </div>`)
    }
}

for(let root_file of root_files) {
    let file_elem = make_file_element(root_file)
    $( "#filestructure" ).append( file_elem);    
}



// make folder hierarchy into an accordion structure
$('.folder').accordion({
    collapsible: true,
    heightStyle: 'content'
}) // TODO: start collapsed and check whether read permission exists before expanding?


// -- Connect File Structure lock buttons to the permission dialog --

// open permissions dialog when a permission button is clicked
$('.permbutton').click( function( e ) {
    // Set the path and open dialog:
    let path = e.currentTarget.getAttribute('path');
    perm_dialog.attr('filepath', path)
    perm_dialog.dialog('open')
    //open_permissions_dialog(path)

    // Deal with the fact that folders try to collapse/expand when you click on their permissions button:
    e.stopPropagation() // don't propagate button click to element underneath it (e.g. folder accordion)
    // Emit a click for logging purposes:
    emitter.dispatchEvent(new CustomEvent('userEvent', { detail: new ClickEntry(ActionEnum.CLICK, (e.clientX + window.pageXOffset), (e.clientY + window.pageYOffset), e.target.id,new Date().getTime()) }))
});


$('.permfilebutton').click( function( e ) {
    // Set the path and open dialog:
    let path = e.currentTarget.getAttribute('path');
    $('#generated_permission').attr('filepath', path)
    
    e.stopPropagation()
    emitter.dispatchEvent(new CustomEvent('userEvent', { detail: new ClickEntry(ActionEnum.CLICK, (e.clientX + window.pageXOffset), (e.clientY + window.pageYOffset), e.target.id,new Date().getTime()) }))
});
// ---- Assign unique ids to everything that doesn't have an ID ----
$('#html-loc').find('*').uniqueId() 

// Challenges / bonus ideas
$('.permbutton').append('Permissions')