var events = null;

Ext.onReady(
    function() {
	events = new Axiom.EventManager();

	var users_store = new Ext.data.JsonStore(
	    {
		totalProperty: 'numRows',
		root: 'items',
		url: '/users_json',
		fields: [
		    'username',
		    'first_name',
		    'last_name',
		    'email',
		    'created'
		],
		remoteSort: true
	    }
	);

	var roles_store = new Ext.data.JsonStore(
	    {
		totalProperty: 'numRows',
		root: 'items',
		url: '/roles_json',
		fields: [
		    'role',
		    'created',
		    'num_users'
		],
		remoteSort: true
	    }
	);

	//users_store.setDefaultSort('username', 'ASC');

	var border = new Ext.Viewport(
	    {
		el: 'content_pane',
		layout:'border',
		items: [
		    new Ext.BoxComponent(
			{
			    region:'north',
			    el: 'header',
			    height:37
			}
		    ),
		    new ncb000gt.ux.ControlPanel(
			{
			    viewer: this,
			    roles_store: roles_store,
			    users_store: users_store,
			    sections_store: new Ext.data.JsonStore(
				{
				    idProperty: 'title',
				    fields: ['id', 'title', 'items'],
				    url: '/getSections'
				}
			    )
			}
		    )
		]
	    }
	);
    }
);