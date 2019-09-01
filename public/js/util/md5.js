function fileHash( file, hasher, callback ){
    //Instantiate a reader		  
    var reader = new FileReader();
          
    //What to do when we gets data?
    reader.onload = function( e ){
        var hash = hasher(e.target.result);
        callback( hash );
    }
        
    reader.readAsBinaryString( file );

}