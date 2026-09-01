import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  readonly contactLinks = [
    {
      label: 'Email',
      value: 'charanepuri26@gmail.com',
      description: 'For professional communication and project-related enquiries.',
      href: 'mailto:charanepuri26@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'Connect professionally',
      description: 'View my professional profile and development journey.',
      href: 'https://www.linkedin.com/in/charan-teja-972aa9231'
    },
    {
      label: 'GitHub',
      value: 'Explore the source code',
      description: 'View my projects, repositories, and development work.',
      href: 'https://github.com/charanepuri'
    }
  ];

}