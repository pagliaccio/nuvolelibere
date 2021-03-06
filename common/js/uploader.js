/**
 * @param action
 * @param userUrl
 * @param item
 */
var uurl;
var it;
function initUploader(action,userUrl,item) {
	uurl=userUrl;it=item
	var btnUpload=$('#upload');
	var status=$('#status');
	new AjaxUpload(btnUpload, {
		'action': action,
		name: 'uploadfile',
		onSubmit: function(file, ext){
			 if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){ 
                // extension is not allowed 
				status.text('Only JPG, PNG or GIF files are allowed');
				return false;
			}
			status.text('Uploading...');
		},
		onComplete: function(file, response){
			file=file.replace(/\s+/,'_');
			file=file.replace(/[^-\.\w]+/,'');
			//On completion clear the status
			status.text('');
			//Add uploaded file to list
			if(response=="true"){
				$('<li></li>').appendTo('#files').html('<h4>'+file+'</h4><img src="'+uurl+'/thumb'+file+'" alt="'+file+'" />'+it).addClass('success');
			} else{
				$('<li></li>').appendTo('#files').text(file+'<div>'+response+'</div>').addClass('error');
				
			}
		}
	});
}