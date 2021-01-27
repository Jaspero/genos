export const SETTINGS_COLLECTION = {
  name: 'settings',
  documents: [
    {
      id: 'user',
      roles: [
        {
          email: 'info@jaspero.co',
          role: 'admin'
        }
      ]
    },
    {
      id: 'layout',
      navigation: {
        items: [
          {
            icon: 'dashboard',
            label: 'LAYOUT.DASHBOARD',
            type: 'link',
            value: '/dashboard'
          },
          {
            icon: 'style',
            label: 'LAYOUT.NEWS',
            type: 'link',
            value: '/m/news/overview'
          },
          {
            icon: 'supervisor_account',
            label: 'LAYOUT.MEMBERS',
            type: 'link',
            value: '/m/members/overview'
          },
          {
            icon: '360',
            label: 'LAYOUT.PROJECTS',
            type: 'link',
            value: '/m/projects/overview'
          },
          {
            icon: 'public',
            label: 'LAYOUT.PUBLICATIONS',
            type: 'link',
            value: '/m/publications/overview'
          },
          {
            children: [
              {
                icon: 'supervised_user_circle',
                label: 'GENERAL.USERS',
                type: 'link',
                value: '/m/users/overview'
              },
              {
                icon: 'vpn_key',
                label: 'GENERAL.ROLES',
                type: 'link',
                value: '/m/roles/overview'
              }
            ],
            icon: 'account_box',
            label: 'LAYOUT.MANAGEMENT',
            type: 'expandable'
          },
        ]
      }
    }
  ]
};
