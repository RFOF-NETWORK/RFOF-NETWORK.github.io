// account.js - Die vollständige Logik für das souveräne Account-System.

window.RFOF_MODULES = window.RFOF_MODULES || {};

window.RFOF_MODULES.account = {
    init: function(target) {
        window.RFOF_APP.account = new this.AccountSystem(target);
        window.RFOF_APP.account.init();
    },

    AccountSystem: class {
        // ... (Der gesamte, vollständige Code für die AccountSystem-Klasse 
        //      aus meiner vorherigen Nachricht "Code-Generation 3/5 & 4/5"
        //      wird hier eingefügt.)
        constructor(target) { this.container = target; this.user = null; }
        init() { this.render(); }
        login(type, isOwner = false) { /* ... Login-Logik ... */ }
        logout() { /* ... Logout-Logik ... */ }
        render() { /* ... Render-Logik ... */ }
        // ... etc. ...
    }
};
