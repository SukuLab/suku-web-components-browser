import { Injectable } from '@angular/core';

export interface WebCompProperties {
	data: WebCompData[];
}
export interface WebCompData {
	properties: string;
	type: string;
	description: string;
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
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{ properties: 'weight', type: '[number]', description: 'weight corresponds to the font size.' },
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[string]',
					description: 'it represents the below username.'
				},
				{ properties: 'nameweight', type: '[number]', description: 'weight corresponds to the font size.' },
				{
					properties: 'name-customclass ',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet'
				},
				{
					properties: 'name-size',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'name-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'account-type',
					type: '[string]',
					description: 'A manufacturer  provides goods or services relating to the item being designed, typically prototype or production components.'
				},
				{
					properties: 'account-size',
					type: '[number]',
					description: 'Corresponds to the value of size which is passed to the directive.'
				},
				{
					properties: 'account-weight',
					type: '[number]',
					description: 'weight corresponds to the font size'
				},
				{
					properties: 'account-customclass',
					type: '[string]',
					description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'users',
					type: '[string]',
					description:
						'The user are the end-users who can be buyer or seller.'
				},
				{
					properties: 'comment-size',
					type: '[string]',
					description:
						'The comment-size describes how large or small the user shares his feedback about the product and transactions.'
				},
				{
					properties: 'comment-weight',
					type: '[string]',
					description:
						' The comment-weight corresponds to the font size of the comment-size.'
				},
				{
					properties: 'comment-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'comment',
					type: '[string]',
					description:
						'A product description is the marketing copy used to describe a product value proposition to potential customers.'
				},
				{
					properties: 'rating-value',
					type: '[string]',
					description:
						' Rating value shows the users feedback about the product .'
				},
			]
		},

		{
			data: [
				{
					properties: 'id',
					type: '[string]',
					description: 'If you need to support more than one instance of notification  at a time.'
				},
				{
					properties: 'notification-title',
					type: '[string]',
					description: 'It represents the name of the specific notification. This is submitted with the form data.'
				},
				{
					properties: 'notification-value ',
					type: '[number]',
					description:
						'  It shows the value of its corresponing title.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[string]',
					description: 'it represents the maid id of a user. Example: username@mail.com'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'card-title',
					type: '[name]',
					description: 'it represents the .'
				},
				{
					properties: 'card-title-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'card-title-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'card-title-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'card-content',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'card-content-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'card-content-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'card-content-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
			]
		},
		{
			data: [
				{
					properties: 'bid',
					type: '[number]',
					description: 'A bid is an offer made by an investor, trader or dealer to buy a product.'
				},
				{
					properties: 'bid-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'bid-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading',
					type: '[string]',
					description:
						' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'bid-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-heading-color',
					type: '[string]',
					description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent ',
					type: '[string]',
					description:
						'To determine the strength of a bid.'
				},
				{
					properties: 'percent-size',
					type: '[number]',
					description:
						'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent-heading',
					type: '[string]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'percent-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-heading-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-heading-weight',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				}

			]
		},
		{
			data: [
				{
					properties: 'bid',
					type: '[number]',
					description: 'A bid is an offer made by an investor, trader or dealer to buy a product.'
				},
				{
					properties: 'bid-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'bid-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading',
					type: '[string]',
					description:
						' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'bid-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-heading-color',
					type: '[number]',
					description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent ',
					type: '[string]',
					description:
						'To determine the strength of a bid.'
				},
				{
					properties: 'percent-size',
					type: '[string]',
					description:
						'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent-heading',
					type: '[number]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'percent-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-heading-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-heading-weight',
					type: '[string]',
					description:
						'weight corresponds to the font size.'
				}

			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[string]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'chat-read-icon',
					type: '[string]',
					description: 'The  check mark will appear when all participants in the group have received your message.'
				},
				{
					properties: 'chat-unread-icon',
					type: '[string]',
					description: 'The message counts next to the  icon to be read.'
				},
				{
					properties: 'msg-status',
					type: '[string]',
					description:
						' A status message can tell other users the current status.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'custom-icon-class',
					type: '[string]',
					description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'bg-color',
					type: '[string]',
					description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'interest',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description:
						'To determine the strength of a bid.'
				},
				{
					properties: 'title-one-color',
					type: '[string]',
					description:
						'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'title-one-weight',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one-size',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'content-one',
					type: '[string]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'content-one-color',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'content-one-weight',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-one-size',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-two',
					type: '[string]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'sub-title-two-color',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-two-size',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-three',
					type: '[number]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'sub-title-three-color',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-three-weight',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-three-color',
					type: '[string]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'content-three',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-three-color',
					type: '[string]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'content-three-weight',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-three-size',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				}

			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[string]',
					description: ' it represents the below username.'
				},
				{
					properties: 'image',
					type: '[string]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'icon',
					type: '[string]',
					description: ' Icons help users quickly identify the type of file represented by the icon.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description:
						'Title0one contains descriptive keywords to clearly and accurately convey the contents.'
				},
				{
					properties: 'title-two',
					type: '[string]',
					description:
						'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'create-new-listing',
					type: '[string]',
					description:
						'Create new listing navigates the user to start a new listing for his product.'
				},
			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[string]',
					description: ' it represents the below username.'
				},
				{
					properties: 'image',
					type: '[number]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'icon',
					type: '[number]',
					description: ' Icons help users quickly identify the type of file represented by the icon.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description:
						'Title0one contains descriptive keywords to clearly and accurately convey the contents.'
				},
				{
					properties: 'title-two',
					type: '[string]',
					description:
						'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'create-new-listing',
					type: '[string]',
					description:
						'Create new listing navigates the user to start a new listing for his product.'
				},
			]
		},
{
		data: [
			{
				properties: 'user-name',
				type: '[string]',
				description: ' it represents the below username.'
			},
			{
				properties: 'image',
				type: '[number]',
				description: ' An image is a picture that has been created or copied and stored in electronic form.'
			},
			{
				properties: 'icon',
				type: '[number]',
				description: ' Icons help users quickly identify the type of file represented by the icon.'
			},
			{
				properties: 'title-one ',
				type: '[string]',
				description:
					'Title0one contains descriptive keywords to clearly and accurately convey the contents.'
			},
			{
				properties: 'title-two',
				type: '[string]',
				description:
					'If you need to support more than one instance of title  at a time .'
			},
			{
				properties: 'create-new-listing',
				type: '[string]',
				description:
					'Create new listing navigates the user to start a new listing for his product.'
			},
		]
	},

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
    		<span class="hljs-name">&lt;suku-profile-widget</span>  <span class="na">user-name=</span><span class="s">"Vairog"</span> <span class="na">account-type=</span><span class="s">"Manufacturer"</span><span class="hljs-name">&gt;&lt;/suku-profile-widget&gt;</span>
                       </code></pre>`,
			try: true,
			id: 3
		},
		{
		title: 'suku-rating-widget',
		description: ` suku-rating-widget that consists of suku-rating-star and comments reasoning the star.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-rating-widget</span>  <span class="na">comment-size=</span><span class="s">"16"</span> <span class="na">coment-color=</span><span class="s">"red"</span> <span class="hljs-name">&gt;&lt;/suku-profile-widget&gt;</span>
				   </code></pre>`,
		try: true,
		id: 4
	},
	{
		title: 'notification',
		description: `  suku-notification-widget is to notify the number of notification that shows on the widget.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-notification-widget</span>  <span class="na">id=</span><span class="s">"notification"</span> <span class="na">notification-title=</span><span class="s">"review bids"</span> <span class="na">notification-value=</span><span class="s">"0"</span><span class="hljs-name">&gt;&lt;/suku-notification-widget&gt;</span>
				   </code></pre>`,
		try: true,
		id: 5
	},

	{
		title: 'mail-widget',
		description: `  suku-mail-widget can be a message that may contain text, files, images, or other
		attachments sent through a network to a specified individual or group of individuals`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-mail-widget</span> <span class="na">name=</span><span class="s">"dconway@vairog.com"</span> <span class="na">size=</span><span class="s">"20"</span> <span class="na">color=</span><span class="s">"yellow"</span>  <span class="hljs-name">&gt;&lt;/suku-mail-widget&gt;</span>
				   </code></pre>`,
		try: true,
		id: 6
	},
	{
		title: 'card-title',
		description: ` suku-card-title are surfaces that display content and actions on a single topic.
		They should be easy to scan for relevant and actionable information.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-card-title</span> <span class="na">card-title=</span><span class="s">"INTEREST NAME"</span> <span class="na">card-content=</span><span class="s">"spring cases"</span> <span class="na">card-content-color=</span><span class="s">"yellow"</span>  <span class="hljs-name">&gt;&lt;/suku-card-title&gt;</span>
				   </code></pre>`,
		try: true,
		id: 7
	},
	{
		title: 'bid-info',
		description: `suku-bid-info shows the number of bids and the percentage fulfilled in a numerical form.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-bid-info</span> <span class="na">bids=</span><span class="s">"374"</span> <span class="na">percent=</span><span class="s">"10%"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">percent-heading=</span><span class="s">"fulfill"</span>  <span class="hljs-name">&gt;&lt;/suku-bid-info&gt;</span>
				   </code></pre>`,
		try: true,
		id: 8
	},
	{
		title: 'match-chip',
		description: `suku-match-chip shows the user all the matching product that is available with its Title-card and expiry-date.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-match-chip</span> <span class="na">list-name=</span><span class="s">"Super Computer"</span> <span class="na">prize=</span><span class="s">"10 SUKU"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">sell=</span><span class="s">"seller"</span><span class="na">sell-v=</span><span class="s">"John Smith"</span>   <span class="hljs-name">&gt;&lt;/suku-match-chip&gt;</span>
				   </code></pre>`,
		try: true,
		id: 9
	},
	{
		title: 'card-line',
		description: `suku-match-chip shows the user all the matching product that is available with its Title-card and expiry-date.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-card-line</span> <span class="na">list-name=</span><span class="s">"Super Computer"</span> <span class="na">prize=</span><span class="s">"10 SUKU"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">sell=</span><span class="s">"seller"</span><span class="na">sell-v=</span><span class="s">"John Smith"</span>   <span class="hljs-name">&gt;&lt;/suku-card-line&gt;</span>
				   </code></pre>`,
		try: true,
		id: 10
	},
	{
		title: 'suku-dashboard-profile',
		description: `Suku-Dashboard-Profile shows the profile of a user either buyer or seller with various functionalities like: creating new listing or new interest, etc.The user can also view the review matches, negotiate purchase and many other functions.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-dashboard-profile</span> <span class="na">user-name=</span><span class="s">"Emery"</span> <span class="na">title-one=</span><span class="s">"Create new listing"</span> <span class="na">title-two=</span><span class="s">"create new interest"</span>  <span class="hljs-name">&gt;&lt;/suku-dashboard-profile&gt;</span>
				   </code></pre>`,
		try: true,
		id: 11
	},
	{
		title: 'suku-sub-menu',
		description: ` suku-nav-menu guides user to navigate sub-menus under main menu. For example:"BUY" is a main-menu and under it "Interests and Matches" are the sub-menus.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-sub-menu</span> <span class="na">user-name=</span><span class="s">"Emery"</span> <span class="na">title-one=</span><span class="s">"Create new listing"</span> <span class="na">title-two=</span><span class="s">"create new interest"</span>  <span class="hljs-name">&gt;&lt;/suku-sub-nav-menu&gt;</span>
				   </code></pre>`,
		try: true,
		id: 12
	},
	{
		title: 'suku-progress-bar',
		description: `   suku-progress-bar implies the steps to follow one after another. Also emphasizes which step the user is in.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-progress-bar</span> <span class="na">progress-style-one=</span><span class="s">"progressCompleted"</span> <span class="na"> heading-one=</span><span class="s">"first heading"</span><span class="hljs-name">&gt;&lt;/suku-progress-bar&gt;</span>
				   </code></pre>`,
		try: true,
		id: 13
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
			},
			{
				name: 'progress-bar',
				id: 13
			}
		];
	}
}

export const person = {
    name: {
      label: 'Name',
      value: 'Parashuram',
      type: 'text',
      validation: {
        required: false
      }
    }
}
