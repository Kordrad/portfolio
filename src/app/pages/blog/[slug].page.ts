import { injectContent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (post$ | async; as post) {
      <article>
        <img [src]="post.attributes.coverImage" alt="photo" class="post__image" />
        <analog-markdown [content]="post.content" />
      </article>
    }
  `,
  styles: `
    .post__image {
      max-height: 40vh;
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
