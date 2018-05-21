# Configuration

1.- Add the configuration to your `app/config/parameters_deploy.yml` or `app/config/parameters.yml` file:

```
parameters:
    pumukit2.naked_backoffice_domain: pumukit2-naked.example.com
pumukit_open_edx:
    password: 'ThisIsASecretPasswordChangeMe'
    role: 'owner'
    naked_backoffice_domain: false
    naked_backoffice_background: 'white'
    naked_backoffice_color: '#ED6D00'
    naked_custom_css_url: null
    upload_series_title: 'My Open edX Uploads'
    recording_series_title: 'My Open edX Recordings'
    open_edx_hosts: 
        - 
            lms: lms.myopenedx.com
            cms: cms.myopenedx.com
        - 
            lms: lms2.myopenedx.com
            cms: cms2.myopenedx.com
```


* `pumukit2.naked_backoffice_domain`: Naked URL of PuMuKIT
* `password`: Shared secret between Open edX and Pumukit
* `role`: Role used to filter persons in multimedia object
* `naked_backoffice_domain`: Domain or subdomain used to access into the naked backoffice
* `naked_backoffice_background`: CSS color used in the naked backoffice background
* `naked_backoffice_color`: CSS color used in the naked backoffice as main color
* `naked_custom_css_url`: Custom CSS URL
* `upload_series_title`: Series title for Multimedia Objects uploaded from Open edX
* `recording_series_title`: Series title for Multimedia Objects recorded from Open edX
* `open_edx_lms_host`: Domains of the Open edX LMS connected to this PuMuKIT
* `open_edx_cms_host`: Domains of the Open edX CMS connected to this PuMuKIT


2.- Clear cache

```
php app/console cache:clear
php app/console cache:clear --env=prod
```