// Global object
window.taskManager = {
    ids: 0,
    tUsers: [],
    container: null,
    /**
     *
     */
    init: function(jsonData) {
        taskManager.container = jsonData.container;
    },
    render: {
    /**
     *
     */
        user: function(user) {
        
            taskManager.container.appendChild(taskManager.templates.user(user));

        }
    },
    templates : {
    /**
     *
     */
        user : function(user){
            usrData = user;
            
            tmpl = document.createElement('div');
            tmpl.id = 'user-' + usrData.id;
            tmpl.className = 'user-pipe';
            tmpl.appendChild(
                document.createTextNode(usrData.name)
            );
            
            return tmpl;
        }
    },
    task: {
        //get & sets
    /**
     *
     */
        getUser: function(id) {

            return taskManager.tUsers[id];

        },
    /**
     *
     */
        setUser: function(user) {

        },
        //other methodos

        /**
         *  add an unser to  a task
         *  @param {integer} int
         *  @return boolean
         */
        addUser: function(user) {

        },
        /**
         * edit user in a task
         * @return boolean
         */
        editUser: function() {

            console.info("edit user: " + user);

            return true
        }

    },
    user:{
        
        
        /**
         * add user to scope
         * @param {integer} user
         * @return {integer} id user
         */
        setUser : function(user){
            current_id = taskManager.ids;

            objUser = {
                id: current_id,
                name: user
            }

            taskManager.tUsers[current_id] = objUser;

            taskManager.ids++;

            if (typeof taskManager.tUsers[current_id] != 'undefined') {

                return current_id;
            } else {
                return false;
            }
        },
        /**
         *get user from users array
         *@param {integer} id
         *@return {object} user
         **/
        getUser : function(id){
            return taskManager.tUsers[id];
        },
        /**
         * add user to a enviroment
         * @param {integer} user
         * @return {bolean}
         */
        add : function(user){
            
            id_User = this.setUser(user);

            usr_data = this.getUser(id_User);
            
            if(typeof usr_data != 'undefined'){
                taskManager.render.user(usr_data);
            }

            console.info(usr_data);

            return true;

        }
    }
};


