// Global object
window.taskManager = {
    
    Task : {
        
        tUser: {
            id : 0, 
            name : "lorem"
        },
        
        
        //get & sets
        getUser : function(){
        
            console.info(this);
        
        },
    
        setUser : function(user){
        
            this.tUser.name = user;
        
        },
        //other methodos
        
        /**
         *  add an unser to  a task
         *  return boolean
         */
        addUser : function(){
        
            console.info(this);
            
            return true;
        
        }, 
        /**
         * edit user in a task
         * return boolean
         */
        editUser : function(){
            
            console.info("edit user: " + user);
            
            return true
        }
        
    }
};


