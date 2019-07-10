import { Injectable } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

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
	codeSample: any;
	jsonSample: any;
	usage: any;
	try: boolean;
	id: number;
	preview?: boolean;
}
@Injectable({
	providedIn: 'root'
})
export class WebComponentsServices {
	/* define properties for each webcomponents */
	public Properties_DATA: WebCompProperties[] = [
		{
			data: []
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
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
				{ properties: 'weight', type: '[number]', description: 'Weight corresponds to the font size.' },
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
				{ properties: 'name-weight', type: '[number]', description: 'Weight corresponds to the font size.' },
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
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'account-type',
					type: '[string]',
					description:
						'A manufacturer  provides goods or services relating to the item being designed, typically prototype or production components.'
				},
				{
					properties: 'account-size',
					type: '[number]',
					description: 'Corresponds to the value of size which is passed to the directive.'
				},
				{
					properties: 'account-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'account-customclass',
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
				{
					properties: 'weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'users',
					type: '[string]',
					description: 'The user are the end-users who can be buyer or seller.'
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
					description: ' The comment-weight corresponds to the font size of the comment-size.'
				},
				{
					properties: 'comment-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					description: ' Rating value shows the users feedback about the product .'
				}
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
					description: '  It shows the value of its corresponing title.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[string]',
					description: 'it represents the mail id of a user. Example: username@mail.com'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'bid-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading',
					type: '[string]',
					description: ' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'bid-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-heading-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'percent',
					type: '[string]',
					description: 'To determine the strength of a bid.'
				},
				{
					properties: 'percent-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'percent-heading',
					type: '[string]',
					description: 'It allows to determine exactly which demand sources are participating.'
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
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-heading-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				}
			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[number]',
					description: '	An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'match',
					type: '[number]',
					description: 'Corresponds to the match for users listing and interest.'
				},
				{
					properties: 'list-name-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'list-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'list-weight',
					type: '[string]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'list-name',
					type: '[number]',
					description: 'Corresponds to the name for each list.'
				},
				{
					properties: 'prize',
					type: '[number]',
					description: 'Corresponds to the value given to the matched listing of the product.'
				},
				{
					properties: 'prize-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'prize-weight ',
					type: '[string]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'prize-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'prize-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'date',
					type: '[number]',
					description: 'Date corresponds to listing expiry date.'
				},
				{
					properties: 'date-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'date-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'date-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'date-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'dateV',
					type: '[number]',
					description: 'The dateV corresponds to the date value of listing a product.'
				},
				{
					properties: 'dateV-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'dateV-color',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'dateV-weight',
					type: '[string]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'dateV-costomclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'sell',
					type: '[number]',
					description: 'The seller details who sell the product.'
				},
				{
					properties: 'sell-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sell-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sell-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sell-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'sell-v',
					type: '[string]',
					description: 'Corresponds to the seller value name.'
				},
				{
					properties: 'sell-v-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sell-v-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sell-v-color',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sell-v-customclass ',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
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
					description: ' It conveys the current status of the message.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'custom-icon-class',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'bg-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description: 'It displays list name.'
				},
				{
					properties: 'title-one-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'title-one-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'content-one',
					type: '[string]',
					description: 'It allows the users to determine exactly which demand sources are participating.'
				},
				{
					properties: 'content-one-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-one-weight',
					type: '[string]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'content-one-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-two',
					type: '[string]',
					description: 'It displays seller name.'
				},
				{
					properties: 'sub-title-two-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-two-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-three',
					type: '[number]',
					description: 'It displays the date status.'
				},
				{
					properties: 'sub-title-three-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-three-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-three-size',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'content-three',
					type: '[string]',
					description: 'It displays date.'
				},
				{
					properties: 'content-three-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-three-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'content-three-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				}
			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[string]',
					description: ' It represents the below username.'
				},
				{
					properties: 'image',
					type: '[string]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'icon',
					type: '[string]',
					description: ' It helps the user quickly identify the type of file represented by the icon.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description: 'Titleone contains descriptive keywords to clearly and accurately convey the contents.'
				},
				{
					properties: 'title-two',
					type: '[string]',
					description: 'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'action-one',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'action-two',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[string]',
					description: ' it represents the below submenu name.'
				},
				{
					properties: 'id',
					type: '[number]',
					description: ' If you need to support more than one instance of submenu at a time.'
				},
				{
					properties: 'submenulist',
					type: '[array]',
					description: ' [object]={name,id}.'
				}
			]
		},
		{
			data: [
				{
					properties: 'progress-style-one',
					type: '[string]',
					description: ' it represents the progress as completed.'
				},
				{
					properties: 'progress-style-two',
					type: '[number]',
					description: '  it represents the progress as active.'
				},
				{
					properties: 'progress-style-three',
					type: '[number]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-four',
					type: '[number]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-five',
					type: '[number]',
					description: ' It represents the progress as upcoming .'
				},
				{
					properties: 'first-heading',
					type: '[string]',
					description: 'It represents the below contents.'
				},
				{
					properties: 'second-heading',
					type: '[string]',
					description: ' it represents the below contents.'
				},
				{
					properties: 'third-heading',
					type: '[string]',
					description: 'it represents the below contents.'
				},
				{
					properties: 'fourth-heading',
					type: '[string]',
					description: 'it represents the below contents.'
				},
				{
					properties: 'fifth-heading',
					type: '[string]',
					description: 'it represents the below contents.'
				},
				{
					properties: 'heading-one-id',
					type: '[string]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-two-id',
					type: '[string]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-three-id',
					type: '[string]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-four-id',
					type: '[string]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-five-id',
					type: '[string]',
					description: 'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'Custom CSS',
					type: '[string]',
					description:
						'ProgressCompleted- "progressCompleted", ProgressActive-"progressActive", ProgressUpcoming-"progressUpcoming".'
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
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'action',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
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
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'action',
					type: '[string]',
					description: ' The response when the link is navigated to the required page or content.'
				}
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[string]',
					description: ' it represents the contents below.'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'options',
					type: '[string]',
					description: ' Specifies that the user is required to select a value before submitting the form.'
				}
			]
		},
		{
			data: [
				{
					properties: 'number',
					type: '[string]',
					description: ' String of specific numbers that a telephone or cell phone user can dial to reach the end user.'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					properties: 'name',
					type: '[string]',
					description: ' element identifies contact information relevant to the current site.'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					properties: 'name',
					type: '[string]',
					description: 'it guides the end user to select the required optiion.'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'action',
					type: '[output]',
					description: ' It performs required actions.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[string]',
					description: 'It represents the contents below.'
				},
				{
					properties: 'id',
					type: '[number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bgcolor',
					type: '[string]',
					description: 'The background-color CSS property sets the background color of an element.'
				},
				{
					properties: 'routerlink',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'status-types-dynamic ',
					type: '[array]',
					description: ' statustypes dynamic are used for fields that can take predefined values, such as check-boxes.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'action',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'action',
					type: '[output]',
					description: ' It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'action',
					type: '[output]',
					description: ' It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'action',
					type: '[output]',
					description: ' It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'icon',
					type: '[string]',
					description: 'It is used to represent the user and can often identify the Scratcher.'
				},
				{
					properties: 'value',
					type: '[number]',
					description: 'Rating the feeback to the buyer or seller from an end user.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form-radio',
					type: '[string]',
					description: 'The text-box helps the user to enter the search string they require.'
				},
				{
					properties: 'icon',
					type: '[string]',
					description: 'Used to identify the searh box to fetch the required data.'
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
					properties: 'prize',
					type: '[number]',
					description: 'The value assigned to the product by a buyer or seller.'
				},
				{
					properties: 'prize-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'prize-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'prize-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
				},
				{
					properties: 'prize-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'unit',
					type: '[number]',
					description: 'unit indicates the cost per product or bid placed.'
				},
				{
					properties: 'unit-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'unit-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'unit-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'unit-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'q-content',
					type: '[string]',
					description: ' The quantity per product in the bid.'
				},
				{
					properties: 'q-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'q-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'q-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
				},
				{
					properties: 'q-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'p-content',
					type: '[string]',
					description: 'The bids placed for each products  .'
				},
				{
					properties: 'p-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'p-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'p-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
				},
				{
					properties: 'p-customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'rating',
					type: '[number]',
					description: 'The feedback given by the buyer or seller to the product.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'value',
					type: '[number]',
					description: ' The rating value feedback in terms of star to the product.'
				}
			]
		},
		{
			data: [
				{
					properties: 'progress-style-one',
					type: '[string]',
					description: 'It shows the progress in completed state.'
				},
				{
					properties: 'progress-style-two',
					type: '[string]',
					description: 'It shows the progress as active.'
				},
				{
					properties: 'progress-style-three',
					type: '[string]',
					description: ' It shows the progress as upcoming.'
				},
				{
					properties: 'heading-one',
					type: '[string]',
					description: 'It represents the different categories of tracking.'
				},
				{
					properties: 'heading-two',
					type: '[string]',
					description: 'It represents the different categories of tracking.'
				},
				{
					properties: 'heading-three',
					type: '[string]',
					description: 'It represents the different categories of tracking.'
				},
				{
					properties: 'custom-heading-one-class',
					type: '[string]',
					description: 'It differentiates the categories with the color indications.'
				},
				{
					properties: 'custom-heading-two-class',
					type: '[string]',
					description: 'It differentiates the categories with the color indications.'
				},
				{
					properties: 'custom-heading-three-class',
					type: '[string]',
					description: ' It differentiates the categories with the color indications.'
				}
			]
		},
		{
			data: [
				{
					properties: 'head-name',
					type: '[string]',
					description: 'It corresponds to product title.'
				},
				{
					properties: 'sub-head-name',
					type: '[string]',
					description: 'It corresponds to product sub-title.'
				},
				{
					properties: 'name',
					type: '[Input]',
					description: 'It corresponds to type of search in the widget.'
				},
				{
					properties: 'control',
					type: '[Input]',
					description: 'It holds the formcontrolname in the widget.'
				},
				{
					properties: '[form]',
					type: '[Input]',
					description: 'It holds the formgroup name.'
				},
				{
					properties: 'searchFun',
					type: '[Output]',
					description: 'It prompts the user to find the required product.'
				},
				{
					properties: 'selectproducts',
					type: '[Output]',
					description: 'It prompts the user to find the product.'
				},
				{
					properties: 'searchByProduct',
					type: '[Output]',
					description: 'Users can locate product by searching for specific words or phrases.'
				},
				{
					properties: 'traceproduct',
					type: '[Output]',
					description:
						'traceproduct refers to the capability for tracing products along the distribution chain on a batch number.'
				},
				{
					properties: 'disabledBtn',
					type: '[Output]',
					description: 'It corresponds to the button which is disableds before the details is filled.'
				},
				{
					properties: 'productdetails',
					type: '[Output]',
					description: 'It shows the complete track details of the product required.'
				},
				{
					properties: 'result',
					type: '[Output]',
					description: 'It is a short summary of the search, links to more detailed analysis.'
				},
				{
					properties: 'visible',
					type: '[Output]',
					description: 'Corresponds to the products allowed to be visible in the tracking.'
				}
			]
		},
		{
			data: [
				{
					properties: 'tree-data',
					type: '[Array]',
					description: 'It holds the parent/child JSON Data of the products.'
				}
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to ACH title.'
				},
				{
					properties: 'subTitle',
					type: '[String]',
					description: 'It corresponds to ACH subtitle.'
				},
				{
					properties: 'upperText',
					type: '[String]',
					description: 'It corresponds to ACH upper description.'
				},
				{
					properties: 'lowerText',
					type: '[String]',
					description: 'It corresponds to ACH lower description.'
				},
				{
					properties: 'SetupACHPaymentsBtnText',
					type: '[String]',
					description: 'It corresponds to ACH Setup Payment button text.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It prompts the user to setup the ACH payment.'
				},
				{
					properties: 'titleId',
					type: '[String]',
					description: 'It corresponds to ACH title tag ID.'
				},
				{
					properties: 'subTitleId',
					type: '[String]',
					description: 'It corresponds to ACH subtitle tag ID.'
				},
				{
					properties: 'upperTextId',
					type: '[String]',
					description: 'It corresponds to ACH Upper text tag ID.'
				},
				{
					properties: 'lowerTextId',
					type: '[String]',
					description: 'It corresponds to ACH lower text tag ID.'
				},
				{
					properties: 'paymentButtonId',
					type: '[String]',
					description: 'It corresponds to ACH payment button tag ID.'
				}
			]
		},
		{
			data: [
				{
					properties: 'typeId',
					type: '[String]',
					description: 'It corresponds to Transaction Type table header ID.'
				},
				{
					properties: 'myAccountId',
					type: '[String]',
					description: 'It corresponds to Transaction Account table header ID.'
				},
				{
					properties: 'CounterpartyId',
					type: '[String]',
					description: 'It corresponds to Transaction Counter Party table header ID.'
				},
				{
					properties: 'amountId',
					type: '[String]',
					description: 'It corresponds to Transaction Amount table header ID.'
				},
				{
					properties: 'statusId',
					type: '[String]',
					description: 'It corresponds to Transaction Status table header ID.'
				},
				{
					properties: 'dateCreatedId',
					type: '[String]',
					description: 'It corresponds to Transaction Date table header ID.'
				},
				{
					properties: 'paymentManagementId',
					type: '[String]',
					description: 'It corresponds to Transaction payment Management table header ID.'
				},
				{
					properties: 'cancel',
					type: '[String]',
					description: 'It corresponds to Transaction payment cancel button text.'
				},
				{
					properties: 'cancelId',
					type: '[String]',
					description: 'It corresponds to Transaction payment cancel button ID.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It prompts the user to cancel the pending Transaction.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It corresponds to FormGroup name.'
				},
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to title.'
				},
				{
					properties: 'countriesList',
					type: '[array]',
					description: 'It holds array of countries provided.'
				},
				{
					properties: 'countrySelect',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'statesList',
					type: '[array]',
					description: 'It holds array of states provided.'
				},
				{
					properties: 'stateSelect',
					type: '[output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'content',
					type: '[String]',
					description: 'It holds to content for agreement.'
				},
				{
					properties: 'contentId',
					type: '[String]',
					description: 'It holds to content Id for agreement.'
				},
				{
					properties: 'control',
					type: '[String]',
					description: 'It defines to formcontrolname for checkbox element.'
				},
				{
					properties: 'submit',
					type: '[String]',
					description: 'It corresponds to click action for button.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It corresponds to FormGroup name.'
				},
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to title.'
				},
				{
					properties: 'titleClass',
					type: '[String]',
					description: 'It corresponds to custom class for title attribute.'
				},
				{
					properties: 'checkBoxId',
					type: '[String]',
					description: 'It defines Id for checkbox.'
				},
				{
					properties: 'content',
					type: '[String]',
					description: 'It holds to content for agreement.'
				},
				{
					properties: 'contentId',
					type: '[String]',
					description: 'It holds to content Id for agreement.'
				},
				{
					properties: 'control',
					type: '[String]',
					description: 'It defines to formcontrolname for checkbox element.'
				},
				{
					properties: 'formArrayName',
					type: '[String]',
					description: 'It defines to form-array-name for beneficial owner form.'
				},
				{
					properties: 'submit',
					type: '[String]',
					description: 'It corresponds to click action for button.'
				}
			]
		},
		{
			data: [
				{
					properties: 'iav-token',
					type: '[String]',
					description: 'It holds to Instant Account Verification (IAV) token.'
				}
			]
		},
		{
			data: [
				{
					properties: 'icon',
					type: '[String]',
					description: 'It defines the type of icon.'
				},
				{
					properties: 'iconCustomClass',
					type: '[String]',
					description: 'It defines the custom class for icon.'
				},
				{
					properties: 'titleOne',
					type: '[String]',
					description: 'It defines the title for suku-confirmation dialog.'
				},
				{
					properties: 'titleOneId',
					type: '[String]',
					description: 'It defines Id for titleOne in suku-confirmation dialog.'
				},
				{
					properties: 'titleTwo',
					type: '[String]',
					description: 'It defines the sub-title for suku-confirmation dialog.'
				},
				{
					properties: 'titleOneId',
					type: '[String]',
					description: 'It defines Id for titleTwo in suku-confirmation dialog.'
				},
				{
					properties: 'titleThree',
					type: '[String]',
					description: 'It defines the message for suku-confirmation dialog.'
				},
				{
					properties: 'titleThreeId',
					type: '[String]',
					description: 'It defines Id for titleThree in suku-confirmation dialog.'
				},
				{
					properties: 'buttonLableOne',
					type: '[String]',
					description: 'It defines the name for suku-confirmation dialog button-one.'
				},
				{
					properties: 'buttonLableOneId',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				},
				{
					properties: 'buttonLableTwo',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				},
				{
					properties: 'buttonLableTwoId',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				},
				{
					properties: 'buttonCustomClass',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				}
			]
		},
		{
			data: [
				{
					properties: 'label-one',
					type: '[String]',
					description: 'It defines main heading.'
				},
				{
					properties: 'label-one-Id',
					type: '[String]',
					description: 'It defines Id corresponding to labelOne.'
				},
				{
					properties: 'label-two',
					type: '[String]',
					description: 'It defines sub heading.'
				},
				{
					properties: 'label-two-Id',
					type: '[String]',
					description: 'It defines Id corresponding to labelTwo.'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It defines serial number.'
				},
				{
					properties: 'content-on-Id',
					type: '[String]',
					description: 'It defines Id corresponding to contentOne.'
				},
				{
					properties: 'contentOneClass',
					type: '[String]',
					description: 'It defines custom class for contentOne.'
				},
				{
					properties: 'content-two',
					type: '[String]',
					description: 'It defines expiry in block numbers.'
				},
				{
					properties: 'content-two-Id',
					type: '[String]',
					description: 'It defines Id corresponding to contentTwo.'
				},
				{
					properties: 'content-two-class',
					type: '[String]',
					description: 'It defines custom class corresponding to contentTwo.'
				},
				{
					properties: 'content-three',
					type: '[String]',
					description: 'It defines status of proposal.'
				},
				{
					properties: 'content-three-Id',
					type: '[String]',
					description: 'It defines Id corresponding to contentThree.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It defines FormGroup name.'
				},
				{
					properties: 'labelOne',
					type: '[String]',
					description: 'It defines filter heading.'
				},
				{
					properties: 'labelOneSize',
					type: '[String]',
					description: 'It defines font-size for filter heading.'
				},
				{
					properties: 'labelOneCustomClass',
					type: '[String]',
					description: 'It defines customclass for filter heading.'
				},
				{
					properties: 'labelTwo',
					type: '[String]',
					description: 'It defines filter sub-heading.'
				},
				{
					properties: 'labelTwoSize',
					type: '[String]',
					description: 'It defines font-size for filter sub-heading.'
				},
				{
					properties: 'labelTwoCustomClass',
					type: '[String]',
					description: 'It defines customclass for filter sub-heading.'
				},
				{
					properties: 'labelThree',
					type: '[String]',
					description: `It defines date-filter 'from' label.`
				},
				{
					properties: 'labelThreeSize',
					type: '[String]',
					description: `It defines font-size for date-filter 'from' label.`
				},
				{
					properties: 'labelThreeCustomClass',
					type: '[String]',
					description: `It defines custom-class for date-filter 'from' label.`
				},
				{
					properties: 'labelFour',
					type: '[String]',
					description: `It defines date-filter 'To' label.`
				},
				{
					properties: 'labelFourSize',
					type: '[String]',
					description: `It defines font-size for date-filter 'To' label.`
				},
				{
					properties: 'labelFourCustomClass',
					type: '[String]',
					description: `It defines custom-class for date-filter 'To' label.`
				},
				{
					properties: 'filterOnChange',
					type: '[Output]',
					description: 'It corresponds to change event-emitter for checkbox.'
				},
				{
					properties: 'applyFilter',
					type: '[Output]',
					description: 'It corresponds to click event-emitter for applyFilter.'
				},
				{
					properties: 'selectAll',
					type: '[Output]',
					description: 'It corresponds to click event-emitter for selectAll action.'
				},
				{
					properties: 'deselectAll',
					type: '[Output]',
					description: 'It corresponds to click event-emitter for deselectAll action.'
				},
				{
					properties: 'statusTypesDynamic',
					type: '[Output]',
					description: 'It corresponds to the array data for filter.'
				}
			]
		},
		{

			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It defines title for option modal.'
				},
				{
					properties: 'title-size',
					type: '[String]',
					description: 'It defines font-size for the title.'
				},
				{
					properties: 'title-color',
					type: '[String]',
					description: 'It defines font-color for the title.'
				},
				{
					properties: 'title-custom-class',
					type: '[String]',
					description: 'It defines custom-class for the title.'
				},
				{
					properties: 'title-Id',
					type: '[String]',
					description: 'It defines the Id for title.'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It defines the project-name for option modal.'
				},
				{
					properties: 'content-one-size',
					type: '[String]',
					description: 'It defines font-size for content-one.'
				},
				{
					properties: 'content-one-color',
					type: '[String]',
					description: 'It defines font-color for content-one.'
				},
				{
					properties: 'content-one-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for content-one.'
				},
				{
					properties: 'content-one-Id',
					type: '[String]',
					description: 'It defines the Id for content-one.'
				},
				{
					properties: 'img-class',
					type: '[String]',
					description: 'It defines the custom-class for company-logo.'
				},
				{
					properties: 'label-one',
					type: '[String]',
					description: 'It defines votes heading for option modal.'
				},
				{
					properties: 'label-one-size',
					type: '[String]',
					description: 'It defines the font-size for label-one.'
				},
				{
					properties: 'label-one-color',
					type: '[String]',
					description: 'It defines the font-color for label-one.'
				},
				{
					properties: 'label-one-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-one.'
				},
				{
					properties: 'label-one-Id',
					type: '[String]',
					description: 'It defines the Id for label-one.'
				},
				{
					properties: 'content-two',
					type: '[String]',
					description: 'It defines the vote-count for option modal.'
				},
				{
					properties: 'content-two-size',
					type: '[String]',
					description: 'It defines the font-size for content-two.'
				},
				{
					properties: 'content-two-color',
					type: '[String]',
					description: 'It defines the font-color for content-two.'
				},
				{
					properties: 'content-two-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for content-two.'
				},
				{
					properties: 'content-two-Id',
					type: '[String]',
					description: 'It defines the Id for content-two.'
				},
				{
					properties: 'label-two',
					type: '[String]',
					description: 'It defines the outline label for option modal.'
				},
				{
					properties: 'label-two-size',
					type: '[String]',
					description: 'It defines the font-size for label-two.'
				},
				{
					properties: 'label-two-color',
					type: '[String]',
					description: 'It defines the font-color for label-two.'
				},
				{
					properties: 'label-two-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-two.'
				},
				{
					properties: 'label-two-Id',
					type: '[String]',
					description: 'It defines the Id for label-two.'
				},
				{
					properties: 'outline',
					type: '[String]',
					description: 'It defines the outline for the project.'
				},
				{
					properties: 'outline-size',
					type: '[String]',
					description: 'It defines the font-size for outline.'
				},
				{
					properties: 'outline-color',
					type: '[String]',
					description: 'It defines the font-color for outline.'
				},
				{
					properties: 'outline-custom-class',
					type: '[String]',
					description: 'It defines the custom class for outline.'
				},
				{
					properties: 'outline-Id',
					type: '[String]',
					description: 'It defines the Id for outline.'
				},
				{
					properties: 'label-three',
					type: '[String]',
					description: 'It defines the team member label.'
				},
				{
					properties: 'label-three-size',
					type: '[String]',
					description: 'It defines the font-size for label-three.'
				},
				{
					properties: 'label-three-color',
					type: '[String]',
					description: 'It defines the font-color for label-three.'
				},
				{
					properties: 'label-three-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-three.'
				},
				{
					properties: 'label-three-Id',
					type: '[String]',
					description: 'It defines the Id for label-three.'
				},
				{
					properties: 'label-four',
					type: '[String]',
					description: 'It defines the addtional resources label.'
				},
				{
					properties: 'label-four-size',
					type: '[String]',
					description: 'It defines the font-size of label-four.'
				},
				{
					properties: 'label-four-color',
					type: '[String]',
					description: 'It defines the font-color of label-four.'
				},
				{
					properties: 'label-four-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-four.'
				},
				{
					properties: 'label-four-Id',
					type: '[String]',
					description: 'It defines the Id for label-four.'
				},
				{
					properties: 'company-logo',
					type: '[String]',
					description: 'It defines the company logo.'
				},
				{
					properties: 'iconSize',
					type: '[number]',
					description: 'It defines the icon font-size.'
				},
				{
					properties: 'iconColor',
					type: '[String]',
					description: 'It defines the icon color.'
				},
				{
					properties: 'iconClass',
					type: '[String]',
					description: 'It defines the icon custom class.'
				},
				{
					properties: 'userNameSize',
					type: '[number]',
					description: 'It corresponds to the user-name font-size.'
				},
				{
					properties: 'userNameColor',
					type: '[String]',
					description: 'It corresponds to the user-name font-color.'
				},
				{
					properties: 'userNameClass',
					type: '[String]',
					description: 'It corresponds to the user-name custom class.'
				},
				{
					properties: 'userDesignationSize',
					type: '[number]',
					description: 'It corresponds to the user-designation font-size.'
				},
				{
					properties: 'userDesignationColor',
					type: '[String]',
					description: 'It corresponds to the user-designation font-color.'
				},
				{
					properties: 'userDesignationClass',
					type: '[String]',
					description: 'It corresponds to the user-designation custom class.'
				},
				{
					properties: 'userImgClass',
					type: '[String]',
					description: 'It corresponds to the user-image custom class.'
				},
				{
					properties: 'widgetCustomClass',
					type: '[String]',
					description: 'It corresponds to the users-widget custom class.'
				},
				{
					properties: 'links',
					type: '[Array]',
					description: 'It corresponds to the additional resources links.'
				},
				{
					properties: 'linksKey',
					type: '[Array]',
					description: 'It defines key name in link array for additional resources links.'
				}
			]
		},
		{
			data: [
				{
					properties: 'titleStyle',
					type: '[String]',
					description: 'It defines custom class for title(project name).'
				},
				{
					properties: 'summeryStyle',
					type: '[String]',
					description: 'It defines custom class for project Summery.'
				},
				{
					properties: 'bgColor',
					type: '[String]',
					description: 'It defines background-color for choice-widget.'
				},
				{
					properties: 'footerbox',
					type: '[String]',
					description: 'It defines custom class for choice-widget-footer.'
				},
				{
					properties: 'choiceOptions',
					type: '[Array]',
					description: 'It defines choice-options array.'
				},
				{
					properties: 'teamMemberskey',
					type: '[String]',
					description: 'It defines key name for teamMemebers details in choiceoptions array.'
				}
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It defines the title for Voting breakdown.'
				},
				{
					properties: 'title-size',
					type: '[String]',
					description: 'It defines the font-size for title in Voting breakdown.'
				},
				{
					properties: 'doughnutChartData',
					type: '[Array]',
					description: 'It defines the chart-data for Voting breakdown.'
				},
			]
		}
	];

	/* Webcomponent details injects here */
	/* !important -- Provided ID for each content-data and webcomponentList should be same */
	public Content_DATA: WebCompContent[] = [
		{
			title: 'GETTING STARTED',
			description: `Welcome to SUKU's web component library! Here you will find a catalog of web components available for building SUKU applications. 

Let's get started: 
1) Select a component from the navigation menu. 
2) Review the details information provided to use the component.
3) Use the sandbox at the bottom of each component page to test out the component and any inputs of your choosing.
			`,
			properties: this.Properties_DATA,
			codeSample: '',
			jsonSample: '',
			usage: ``,
			try: false,
			id: 0
		},
		{
			title: 'suku-heading',
			description: `redners all the font changes, paragraph breaks before and after,
    		and any white space necessary to render the heading.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-heading> You just created suku-heading </suku-heading>',
			jsonSample: '',
			usage: ``,
			try: true,
			id: 1
		},
		{
			title: 'suku-sub-heading',
			description: `is used to help break up heading text.
   			 They improve the layout of a page and draw the attention of the readers.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-sub-heading> You just created suku-sub-heading </suku-sub-heading>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 2
		},
		{
			title: 'suku-profile-widget',
			description: `represents the user profile which consists of name, account-type, and ratings.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-profile-widget  user-name="Suku" account-type="Manufacturer"></suku-profile-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 3
		},
		{
			title: 'suku-rating-widget',
			description: `allows a user to submit a rating on a five-star scale.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-rating-widget  comment-size="16" comment-color="#b6b6b6" ></suku-rating-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 4
		},
		{
			title: 'suku-notification',
			description: `is to display the number of notifications for any provided cetegory.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-notification-widget  id="notification" notification-title="review bids" notification-value="0"></suku-notification-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 5
		},

		{
			title: 'suku-mail-widget',
			description: `provides a branded icon and email address link for the provided content.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-mail-widget name="dconway@suku.world" size="14" color="#3e3e3e"></suku-mail-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 6
		},
		{
			title: 'suku-bid-info',
			description: `shows the number of bids and the percentage fulfilled in a numerical form.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-bid-info bids="374" percent="10%" bid-heading="bids"  percent-heading="fulfill"></suku-bid-info>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 8
		},
		{
			title: 'suku-match-chip',
			description: `shows the user all the matching products that are available, including a title and expiration date.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-match-chip list-name="Super Computer" prize="10 SUKU" bid-heading="bids"  sell="seller"sell-v="John Smith"></suku-match-chip>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 9
		},
		{
			title: 'suku-card-line',
			description: `is used to display marketplace products and various statuses associated with them.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-card-line title-one="Super Computer" msg-status ="read" bg-color ="#ffffff"></suku-card-line>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 10
		},
		{
			title: 'suku-dashboard-profile',
			description: `shows the profile of a user with various functionalities, such as creating new listing or new interest. The user can also review matches, negotiate purchases and various other functionalities.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-dashboard-profile user-name="Emery" title-one="CREATE NEW LISTING"></suku-dashboard-profile>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 11
		},
		{
			title: 'suku-nav-submenu',
			description: `provides a sub-navigation menu for more grainular navigation options.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-nav-submenu></suku-nav-submenu>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 12
		},
		{
			title: 'suku-progress-bar',
			description: `shows a series of steps to complete a process, such as a listing creation.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-progress-bar progress-style-one="progressCompleted"  heading-one="first heading"></suku-progress-bar>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 13
		},
		{
			title: 'suku-home-italic-heading',
			description: `displays italic heading text.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-home-italic-heading size="20" > You just created suku-heading </suku-home-italic-heading>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 14
		},
		{
			title: 'suku-link',
			description: `provides a branded link to redirect a user.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-link size="14"> suku-link </suku-link>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 15
		},
		{
			title: 'suku-add-widget',
			description: `guides the end users to create a new item, such as a listing or interest.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-add-widget size="12">ADD NEW LISTING</suku-add-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 16
		},
		{
			title: 'suku-select-input',
			description: `is used to give users a list of choices in a branded dropdown selector.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-select-input size="16" ></suku-select-input>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 17
		},
		{
			title: 'suku-phone-widget',
			description: `provides a branded icon and phone number for the provided content.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-phone-widget number="4806069863" ></suku-phone-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 18
		},
		{
			title: 'suku-address-widget',
			description: `provides a branded icon and address for the provided content.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-address-widget size="16" >ADD NEW LISTING</suku-address-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 19
		},
		{
			title: 'suku-inline-dropdown',
			description: `displays multiple selection options in a branded dropdown.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-inline-dropdown></suku-inline-dropdown>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 20
		},
		{
			title: 'suku-home-widget',
			description: `provides a branded link to redirect a user to the homepage.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-home-widget size="16" >home widget</suku-home-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 21
		},
		{
			title: 'suku-filter',
			description: `enables filtering of a list. It can either be active or inactive`,
			properties: this.Properties_DATA,
			codeSample: '<suku-filter statusTypesDynamic="InsertArrayHere" ></suku-filter>',
			jsonSample: '',
			usage: '',
			try: false,
			id: 22,
		},
		{
			title: 'suku-info-button',
			description: `is a branded button that is used to direct a user to detailed information.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-info-button>Suku-info-button</suku-info-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 23
		},
		{
			title: 'suku-primary-button',
			description: `represents a branded "primary" button.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-primary-button>suku-primary-button</suku-primary-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 24
		},
		{
			title: 'suku-secondary-button',
			description: `represents a branded "secondary" button.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-secondary-button>suku-secondary-button</suku-secondary-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 25
		},
		{
			title: 'suku-default-button',
			description: `represents a branded "default" button.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-default-button>suku-default-button</suku-default-button>',
			jsonSample: '',
			usage: '',
			try: false,
			id: 26
		},
		{
			title: 'suku-star-badge',
			description: `displays a branded badge with a start background.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-star-badge>5</suku-star-badge>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 27
		},
		{
			title: 'suku-search-input',
			description: `represents a search bar with an associated icon.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-search-input></suku-search-input>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 28
		},
		{
			title: 'suku-bid-tag',
			description: `displays a bid associated with products on the marketplace.<div class="d-flex">
			<blockquote>import <span>'SukuBidTagModule'</span> from <span>'suku-webcomponents';</span></blockquote>
			</div><div class="text-left">check show more info to know implementation.</div>`,
			properties: this.Properties_DATA,
			codeSample: '<suku-bid-tag prize="$100" ></suku-bid-tag>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 29
		},
		{
			title: 'suku-rating-star',
			description: `is used to display ratings between 1-5.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-rating-star rating-value="4" ></suku-rating-star>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 30
		},
		{
			title: 'suku-track-progress-bar',
			description: `displays the various steps to view a trace tree.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-track-progress-bar> </suku-track-progress-bar>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 31
		},
		{
			title: 'suku-product-trace-widget',
			description: `gelps users trace a product's details.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-product-trace-widget> </suku-product-trace-widget>',
			jsonSample: '',
			usage: '',
			try: false,
			id: 32
		},
		{
			title: 'suku-tree',
			description: `represents the products in a parent/child hierarchy.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-tree [tree-data]="assign your data here"></suku-tree>',
			jsonSample: [{
				_id: '5c45b8d37bccff62b4c83e4e',
				timestamp: '2019-01-21T11:41:31.921Z',
				children: ['Lx1002', 'Lx1003'],
				uid: 'Lx1001',
				product: {
					id: '1001',
					name: 'Intel I5 CPU QuadCore',
					description: 'HP Laptop'
				},
				links: [
					{
						_id: '5c45b8d37bccff62b4c83e4f',
						uid: 'Lx1000',
						type: 'usedIn'
					},
					{
						_id: '5c45bf6b7bccff62b4c83e53',
						uid: 'Lx1002',
						type: 'composedOf'
					},
					{
						_id: '5c45bf8a7bccff62b4c83e56',
						uid: 'Lx1003',
						type: 'composedOf'
					}
				],
				parent: 'Lx1000',
				__v: 0,
				depth: 0,
				relations: [
					{
						_id: '5c45bf6a7bccff62b4c83e51',
						timestamp: '2019-01-21T11:41:31.921Z',
						children: [],
						uid: 'Lx1002',
						product: {
							id: '1002',
							name: 'Intel I5 CPU Chip',
							description: 'CPU Chip'
						},
						links: [
							{
								_id: '5c45bf6a7bccff62b4c83e52',
								uid: 'Lx1001',
								type: 'usedIn'
							}
						],
						parent: 'Lx1001',
						__v: 0,
						depth: 1,
						relations: []
					}
				]
			}],
			usage: `Sample JSON Data:`,
			try: true,
			id: 33
		},
		{
			title: 'suku-ach-setting',
			description: `represents ACH settings ui.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-ach-setting></suku-ach-setting>',
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 34
		},
		{
			title: 'suku-transaction-history',
			description: `displays a table of a user's transaction history.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-transaction-history [headings]="insert your array headings here" [transactionDetails]="insert your array variable here"></suku-transaction-history>',
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 35
		},
		{
			title: 'suku-dwolla-funding-agreement',
			description: `represents the funding agreement necessary to add a funding source. 

*In order to run this, please provide the formgroup name for form attribute i.e [form]="parent form name" and define formcontrolname in control attribute i.e control="{{insert your formcontrol name here}}. "(Submit)" is a eventemitter which defines the click action and provides form data."`,
			properties: this.Properties_DATA,
			codeSample: `<suku-dwolla-funding-agreement [form]="parentForm" control="checkAgreement" (submit)="submit($event)"></suku-dwolla-funding-agreement>`,
			jsonSample: ``,
			usage: ``,
			try: false,
			id: 36
		},
		{
			title: 'suku-beneficial-owner',
			description: `represents adding beneficial owners for the Dwolla onboarding process.

*In order run this, please provide the formgroup name for form attribute i.e [form]="parent form name" and define formArrayname in control attribute i.e control="{{insert your formcontrol name here}}. "(Submit)" is a eventemitter which defines the click action and provides form data.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-beneficial-owner [form]="parentForm" formArrayName="owner" checkBoxId="owner" control="checkOwner" (submit)="submit($event)"></suku-beneficial-owner>`,
			usage: `<pre>
	Formarrayname sample to be defined:
	owner: this.fb.array([]);
	'owner': is the formarray name.

	Push number of beneficial controls to be defined using the following sample code:
	(<FormArray>this.parentForm.get('owner')).push(this.control());
	'parentForm': is the formgroup name.

	Control names for formarray:

	control(): FormGroup {
		return this.fb.group({
			firstName: new FormControl(),
			lastName: new FormControl(),
			dateOfBirth: new FormControl(),
			ssn: new FormControl(),
			address: this.fb.group({
				address1: new FormControl(),
				address2: new FormControl(),
				city: new FormControl(),
				stateProvinceRegion: new FormControl({ value: '', disabled: true }),
				country: new FormControl(),
				postalCode: new FormControl(),
				document: ''
			})
		});
	}</pre>`,
			jsonSample: '',
			try: false,
			id: 37
		},
		{
			title: 'suku-dwolla-funding-source',
			description: `represents a funding source that is attatched to a user's dwolla account.

Import Dwolla.js Library to run this:
<script src="https://cdn.dwolla.com/1/dwolla.js"></script>`,
			properties: this.Properties_DATA,
			codeSample: `<suku-dwolla-funding-source iav-token="4MTwIIvmwfq1jNttMrLrj7W0sxuE3cttpW56l4S4n8hJTiQoP4"></suku-dwolla-funding-source>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 38
		},
		{
			title: 'suku-confirmation-modal',
			description: `is a dialog component which is used to get confirmation feedback in different scenarios.<div class="d-flex">
			<blockquote>import <span>'SukuModalService'</span> from <span>'suku-webcomponents';</span></blockquote>
			</div><div class="text-left">check show more info to know implementation.</div>`,
			properties: this.Properties_DATA,
			codeSample: ``,
			jsonSample: ``,
			usage: `			<pre>
Usage:
import { SukuModalModule } from 'suku-webcomponents'; or
import { SukuWebcomponentsModule } from 'suku-webcomponents';
into 'app.module.ts';

constructor(private sukuService: SukuModalService){ }
openDialog() {
const data = {
 	icon': 'fa fa-question',
	iconCustomClass: '',
	titleOne: 'Are You Sure?',
	titleOneId: 'confirmation',
	titleTwo: 'Are you sure you'd like to delete this Listing?',
 ...
};
this.sukuService.openConfirmationDialog(data);

// 'onDialogClose' is a eventemitter, which is triggered on close of dialog.
this.sukuService.onDialogClose.subscribe(res => {
	if (res) {
	// action here
	}
});
}
			</pre>`,
			try: false,
			id: 39
		},
		{
			title: 'suku-proposal-header',
			description: `is a simple header widget.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-proposal-header></suku-proposal-header>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 40
		},
		{
			title: 'suku-governance-filter',
			description: `is a filter widget used to filter the proposal's based on proposal status, vote status and by proposal date.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-governance-filter [statusTypesDynamic]="insert your array here"></suku-governance-filter>`,
			jsonSample: [
				{
					displayName: 'Proposal Status',
					key: 'Proposal Status',
					checked: true,
					level: 0,
					label: true,
					hasSub: true,
					sub: [
						{
							displayName: 'Open',
							key: 'Open',
							level: 1,
							checked: false,
							hasSub: false,
							sub: []
						},
						{
							displayName: 'Closed',
							key: 'Closed',
							checked: false,
							level: 1,
							hasSub: false,
							sub: []
						}
					]
				},
				{
					displayName: 'Vote Status',
					key: 'Vote Status',
					checked: true,
					level: 0,
					label: true,
					hasSub: true,
					sub: [
						{
							displayName: 'Have Voted',
							key: 'Voted',
							checked: false,
							level: 1,
							hasSub: true,
							sub: []
						},
						{
							displayName: 'Have Not Voted',
							key: 'NotVoted',
							checked: false,
							level: 1,
							hasSub: false,
							sub: []
						}
					]
				}
			],
			usage: `Sample JSON Data:`,
			try: false,
			id: 41,
			preview: true
		},
		{
			title: 'suku-proposal-option-modal',
			description: `is a dialog component with proposal option information.
*In order to run this,  import 'SukuModalService' from suku-governance-webcomponent.`,
			properties: this.Properties_DATA,
			codeSample: ``,
			jsonSample: ``,
			usage: `
			<pre>
Usage:
constructor(private sukuService: SukuModalService){ }
openDialog() {
const data = {
 title : 'OPTION#1',
 contentOne : 'Project A',
 labelOne : 'Votes',
 ...
};
this.sukuService.openInfoModal(data);
}
			</pre>
			`,
			try: false,
			id: 42
		},
		{
			title: 'suku-list-proposal-choice-widget',
			description: `is a list of choice for a proposal.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-list-proposal-choice-widget [choiceOptions]="insert your data here"></suku-list-proposal-choice-widget>`,
			jsonSample: [{
				voteCount: '203.5 Million',
				btnSecondry: 'More Information',
				btnPrimary: 'Voted',
				projectName: ' sample Project A',
				optionId: '1',
				optionSummary: 'text of an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				optionImg: 'https://s3-eu-west-1.amazonaws.com/farmplan-assets-live/sites/1/2019/02/Microsoft-logo_rgb_c-gray.png',
				optionImgId: 'image1',
				optionImgName: 'image1',
				IsBtnPrimary: false,
				teamMembersCustomArray: [
					{
						userName: 'Larry',
						userNameId: 'Larry',
						userDesignation: 'Project Manager',
						userDesignationId: 'Project Manager',
						userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
						userImgId: 'user1',
						socialMedia: [
							{
								name: 'telegram',
								link: 'xyz',
								icon: 'fa fa-telegram',
								id: 'telegram'
							},
							{
								name: 'twitter',
								link: 'xyz',
								icon: 'fa fa-twitter-square',
								id: 'twitter'
							},
							{
								name: 'linkedin',
								link: 'xyz',
								icon: 'fa fa-linkedin-square',
								id: 'linkedIn'
							},
							{
								name: 'github',
								link: 'xyz',
								icon: 'fa fa-github-alt',
							}
						],
						path: '/pathName',
						disabled: false,
						id: 'user'
					}
				]
			}],
			usage: `Sample JSON Data:`,
			try: true,
			id: 43
		},
		{
			title: 'suku-doughnut-chart-widget',
			description: `is a doughnut chart widget which represents the votes breakdown.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-doughnut-chart-widget [doughnutChartData]="insert data here"></suku-doughnut-chart-widget>`,
			jsonSample: [
				['Choice #01', 20000],
				['Choice #02', 30000],
				['Choice #03', 40000],
				['Choice #04', 50000]
			],
			usage: `Sample JSON Data:`,
			try: true,
			id: 44
		},
		{
			title: 'suku-text-editor',
			description: `is a simple text editor.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-text-editor></suku-text-editor>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 45
		}
	];

	/* declaring heading for sidebar block */
	public webcomponentList() {
		return [
			{
				name: 'Getting Started',
				id: 0
			},
			{
				name: 'Heading',
				id: 1
			},
			{
				name: 'Sub Heading',
				id: 2
			},
			{
				name: 'Profile Widget',
				id: 3
			},
			{
				name: 'Rating Widget',
				id: 4
			},
			{
				name: 'Notification',
				id: 5
			},
			{
				name: 'Mail Widget',
				id: 6
			},
			{
				name: 'Bid Info',
				id: 8
			},
			{
				name: 'Match Chip',
				id: 9
			},
			{
				name: 'Card Line',
				id: 10
			},
			{
				name: 'Dashboard Profile',
				id: 11
			},
			{
				name: 'Sub Menu',
				id: 12
			},
			{
				name: 'Progress Bar',
				id: 13
			},
			{
				name: 'Italic Heading',
				id: 14
			},
			{
				name: 'SUKU Link',
				id: 15
			},
			{
				name: 'Add Widget',
				id: 16
			},
			{
				name: 'Select Input',
				id: 17
			},
			{
				name: 'Phone Widget',
				id: 18
			},
			{
				name: 'Address Widget',
				id: 19
			},
			{
				name: 'Inline Dropdown',
				id: 20
			},
			{
				name: 'Home Widget',
				id: 21
			},
			{
				name: 'Filters',
				id: 22
			},
			{
				name: 'Info Button',
				id: 23
			},
			{
				name: 'Primary Button',
				id: 24
			},
			{
				name: 'Secondary Button',
				id: 25
			},
			{
				name: 'Default Button',
				id: 26
			},
			{
				name: 'Star Badge',
				id: 27
			},
			{
				name: 'Search Input',
				id: 28
			},
			{
				name: 'Bid Tag',
				id: 29
			},
			{
				name: 'Rating Star',
				id: 30
			},
			{
				name: 'Track and Trace Progress Bar',
				id: 31
			},
			{
				name: 'Product Trace Widget',
				id: 32
			},
			{
				name: 'Trace Tree',
				id: 33
			},
			{
				name: 'Ach Settings',
				id: 34
			},
			{
				name: 'Transaction History',
				id: 35
			},
			{
				name: 'Dwolla Funding Agreement',
				id: 36
			},
			{
				name: 'Beneficial Owner',
				id: 37
			},
			{
				name: 'Dwolla Funding Source',
				id: 38
			},
			{
				name: 'Confirmation Modal',
				id: 39
			},
			{
				name: 'Proposal Header',
				id: 40
			},
			{
				name: 'Governance Filter',
				id: 41
			},
			{
				name: 'Proposal Option Modal',
				id: 42
			},
			{
				name: 'List Proposal Choice Widget',
				id: 43
			},
			{
				name: 'Doughnut Chart Widget',
				id: 44
			},
			{
				name: 'Text Editor',
				id: 45
			}
		];
	}
}

/* to be removed */
export const person = {
	name: {
		label: 'Name',
		value: 'Parashuram',
		type: 'text',
		validation: {
			required: false
		}
	}
};
