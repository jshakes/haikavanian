<?php get_header(); ?>
<?php while(have_posts()):
  the_post();
  ?>
  <article class="blog-post">
    <a href="<?php the_permalink(); ?>"><h2><?php the_title(); ?></h2></a>
    <div><?php the_content(); ?></div>
  </article>
  <?php
endwhile; ?>
<?php get_footer(); ?>
