# Generic Drupal 8 Site

## Usage
Install Docker.
* Mac: https://store.docker.com/editions/community/docker-ce-desktop-mac

Add any test modules to the 'modules' directory in the repo.
Add any themes to the 'themes' directory in this repo.

From the root of this directory, do
```
docker-compose -f docker-compose.yml up
```
This sets up a full Drupal site at http://localhost:8080

The admin user and password for the site are 'admin'.

Select the theme named ˜bootstrap_subtheme˜ in order to see the modifications.

##Details of the challenge
1) Clone https://github.com/mcewand/docker-d8 and follow the directions.
Done.

2) Create a Drupal 8 theme that uses Drupal Bootstrap as a base theme.
I used Bootstrap3 [https://www.drupal.org/project/bootstrap] because Bootstrap 4 [https://www.drupal.org/project/bootstrap4] is in alpha version and is not covered by Drupal's security advisor policy, as mentioned on the website;
Then I created a subtheme to add the following modifications.

3) Make the background for the site light blue with a gradient to dark blue at the bottom of the page.
I created sass files to add this modification to the body tag and used grunt to compile it.

4) Change the title for all pages that display a non-blank title (e.g. node pages) to "This page is named: [page title]"
I used twig files of the subtheme to add this modification, on h1 and on title tags.

5) On Article pages, there is an image field provided. Mask the main image with a grey box. When the mouse hovers over the image, remove the mask.
I used an overlay box to add this mask, although it could be done using css mask.

6) Check the theme into github.
Done.