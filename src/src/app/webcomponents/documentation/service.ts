import { Injectable } from '@angular/core';

export interface WebCompProperties {
	data: WebCompData[];
}
export interface WebCompData {
	Properties: string;
	Type: string;
	Description: string;
}
export interface WebCompContent {
	title: string;
	description: string;
	properties: any;
	mockSample: any;
	try: boolean;
	id: number;
}
@Injectable({
	providedIn: 'root'
})
export class WebComponentsServices {
	public Properties_DATA: WebCompProperties[] = [
		{
			data: [
				{
					Properties: 'size',
					Type: '[number]',
					Description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					Properties: 'weight',
					Type: '[number]',
					Description: 'weight corresponds to the font size.'
				},
				{
					Properties: 'color ',
					Type: '[string]',
					Description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					Properties: 'customClass',
					Type: '[string]',
					Description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					Properties: 'size',
					Type: '[number]',
					Description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{ Properties: 'weight', Type: '[number]', Description: 'weight corresponds to the font size.' },
				{
					Properties: 'color ',
					Type: '[string]',
					Description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					Properties: 'customClass',
					Type: '[string]',
					Description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					Properties: 'username',
					Type: '[string]',
					Description: 'it represents the below username.'
				},
				{ Properties: 'nameweight', Type: '[number]', Description: 'weight corresponds to the font size.' },
				{
					Properties: 'namecustomclass ',
					Type: '[string]',
					Description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet'
				},
				{
					Properties: 'namesize',
					Type: '[string]',
					Description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					Properties: 'namecolor',
					Type: '[string]',
					Description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
        },
        {
					Properties: 'accounttype',
					Type: '[string]',
					Description:
						'The AccountType type exposes the following members.'
				},
        {
					Properties: 'accountweight',
					Type: '[number]',
					Description:
						'Corresponds to the value of Size which is passed to the directive.'
        },
        {
					Properties: 'accountweight',
					Type: '[number]',
					Description:
						'weight corresponds to the font size'
				},
        {
					Properties: 'accountcustomclass',
					Type: '[string]',
					Description:
						'Corresponds to the value of Size which is passed to the directive.'
				}
			]
		}
	];

	public Content_DATA: WebCompContent[] = [
		{
			title: 'Suku-Heading',
			description: `A heading element implies all the font changes, paragraph breaks before and after,
    and any white space necessary to render the heading.`,
			properties: this.Properties_DATA,
			mockSample: `<pre class="docs-markdown-pre">
    <code class="lang-html docs-markdown-code m-3">
    <span class="hljs-tag">&lt;<span class="hljs-name">suku-heading</span>&gt;<span class="hljs-attr"> You just created suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-heading</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">suku-heading color="#a7be2f" size="50"</span>&gt;<span class="hljs-attr"> You just modified suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-heading</span>&gt;</span>
    </code>
    </pre>
    `,
			try: true,
			id: 1
		},
		{
			title: 'Suku-sub-heading',
			description: `Subheadings are a good way to break up writing.
    They improve the layout of a page and draw the attention of the readers.`,
			properties: this.Properties_DATA,
			mockSample: `<pre class="docs-markdown-pre">
    <code class="lang-html docs-markdown-code m-3">
    <span class="hljs-tag">&lt;<span class="hljs-name">suku-sub-heading</span>&gt;<span class="hljs-attr"> You just created suku-sub-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-sub-heading</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">suku-sub-heading color="#a7be2f" size="50"</span>&gt;<span class="hljs-attr"> You just modified suku-sub-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-sub-heading</span>&gt;</span>
    </code>
    </pre>`,
			try: true,
			id: 2
		},
		{
			title: 'suku-profile-widget',
			description: `suku-profile-widget represents the user profile in brief which consists of name, account-type and ratings.`,
			properties: this.Properties_DATA,
			mockSample: `<pre><code class="language-html f14" data-lang="html">
    <span class="hljs-name">&lt;suku-profile-widget</span>  <span class="na">username=</span><span class="s">"Vairog"</span> <span class="na">accounttype=</span><span class="s">"Manufacturer"</span><span class="hljs-name">&gt;&lt;/suku-profile-widget&gt;</span>
                       </code></pre>`,
			try: true,
			id: 3
		}
	];

	public webcomponentList() {
		return [
			{
				name: 'Getting started',
				id: 0
			},
			{
				name: 'Heading',
				id: 1
			},
			{
				name: 'Sub-heading',
				id: 2
			},
			{
				name: 'Profile widget',
				id: 3
			},
			{
				name: 'Rating widget',
				id: 4
			},
			{
				name: 'Notification',
				id: 5
			},
			{
				name: 'Mail widget',
				id: 6
			},
			{
				name: 'Card title',
				id: 7
			},
			{
				name: 'Bid Info',
				id: 8
			},
			{
				name: 'Match chip',
				id: 9
			},
			{
				name: 'Card line',
				id: 10
			},
			{
				name: 'Dashboard-Profile',
				id: 11
			},
			{
				name: 'Sub-menu',
				id: 12
			}
		];
	}
}
