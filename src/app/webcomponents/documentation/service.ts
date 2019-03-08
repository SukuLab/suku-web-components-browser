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
	mockSample: any;
	codeSample: any;
	jsonSample: any;
	try: boolean;
	id: number;
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
					description: 'Weight corresponds to the font size.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'percent',
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
					description:
						'Weight corresponds to the font size.'
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
					description:
						'Weight corresponds to the font size.'
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
					description:
						'Weight corresponds to the font size.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'dateV-weight',
					type: '[string]',
					description:
						'Weight corresponds to the font size.'
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
					description:
						'Corresponds to the seller value name.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					description:
						' It conveys the current status of the message.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'custom-icon-class',
					type: '[string]',
					description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'bg-color',
					type: '[string]',
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description: 'It displays list name.'
				},
				{
					properties: 'title-one-color',
					type: '[string]',
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[number]',
					description:
						'Weight corresponds to the font size.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
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
					description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'

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
					description:
						'Titleone contains descriptive keywords to clearly and accurately convey the contents.'
				},
				{
					properties: 'title-two',
					type: '[string]',
					description:
						'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'action-one',
					type: '[output]',
					description:
						'It helps the user to perform the required action.'
				},
				{
					properties: 'action-two',
					type: '[output]',
					description:
						'It helps the user to perform the required action.'
				},
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
				},
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
				description:
					' It represents the progress as upcoming.'
			},
			{
				properties: 'progress-style-five',
				type: '[number]',
				description:
					' It represents the progress as upcoming .'
			},
			{
				properties: 'first-heading',
				type: '[string]',
				description:
					'It represents the below contents.'
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
				description:
					'it represents the below contents.'
			},
			{
				properties: 'fifth-heading',
				type: '[string]',
				description:
					'it represents the below contents.'
			},
			{
				properties: 'heading-one-id',
				type: '[string]',
				description:
					'If you need to support more than one instance of title  at a time.'
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
				description:
					'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'heading-five-id',
				type: '[string]',
				description:
					'If you need to support more than one instance of title  at a time .'
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
				description:
					'It helps the user to perform the required action.'
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
				description:
					' The response when the link is navigated to the required page or content.'
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
				description:
					' Specifies that the user is required to select a value before submitting the form.'
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
			},
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
			},
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
				description:
					' It performs required actions.'
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
				description:
					'The background-color CSS property sets the background color of an element.'
			},
			{
				properties: 'routerlink',
				type: '[output]',
				description:
					'It helps the user to perform the required action.'
			}
		]
	},
	{
		data: [
			{
				properties: 'status-types-dynamic ',
				type: '[array]',
				description:
					' statustypes dynamic are used for fields that can take predefined values, such as check-boxes.'
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
				description:
					'It helps the user to perform the required action.'
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
				description:
					' It helps the user to perform the required action.'
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
				description:
					' It helps the user to perform the required action.'
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
				description:
					' It helps the user to perform the required action.'
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
			},
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
			},
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
				description:
					'Weight corresponds to the font size.'
			},
			{
				properties: 'prize-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
			},
			{
				properties: 'prize-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'unit',
				type: '[number]',
				description:
					'unit indicates the cost per product or bid placed.'
			},
			{
				properties: 'unit-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'unit-weight',
				type: '[number]',
				description:
					'Weight corresponds to the font size.'
			},
			{
				properties: 'unit-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'unit-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'q-content',
				type: '[string]',
				description:
					' The quantity per product in the bid.'
			},
			{
				properties: 'q-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'q-weight',
				type: '[number]',
				description:
					'Weight corresponds to the font size.'
			},
			{
				properties: 'q-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
			},
			{
				properties: 'q-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'p-content',
				type: '[string]',
				description:
					'The bids placed for each products  .'
			},
			{
				properties: 'p-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'p-weight',
				type: '[number]',
				description:
					'Weight corresponds to the font size.'
			},
			{
				properties: 'p-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
			},
			{
				properties: 'p-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
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
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'value',
				type: '[number]',
				description:
					' The rating value feedback in terms of star to the product.'
			},
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
				description:
					' It shows the progress as upcoming.'
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
				description:
					'It represents the different categories of tracking.'
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
				description:
					' It differentiates the categories with the color indications.'
			},
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
				description: 'traceproduct refers to the capability for tracing products along the distribution chain on a batch number.'
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
			},
		]
	},
	{
		data: [
			{
				properties: 'tree-data',
				type: '[Array]',
				description: 'It holds the parent/child JSON Data of the products.'
			},
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
			},
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
			},
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
	}
	];


/* Webcomponent details injects here */
/* !important -- Provided ID for each content-data and webcomponentList should be same */
	public Content_DATA: WebCompContent[] = [
		{
			title: 'GETTING STARTED',
			description: 
			`
Welcome to SUKU's web component library! Here you will find a catalog of web components available for building SUKU applications. 

Let's get started: 
1) Select a component from the navigation menu. 
2) Review the details information provided to use the component.
3) Use the sandbox at the bottom of each component page to test out the component and any inputs of your choosing.
			` ,
			properties: this.Properties_DATA,
			mockSample: ``,
			codeSample: '',
			jsonSample: '',
			try: false,
			id: 0
		},
		{
			title: 'suku-heading',
			description: `redners all the font changes, paragraph breaks before and after,
    		and any white space necessary to render the heading.`,
			properties: this.Properties_DATA,
			mockSample: `<pre class="docs-markdown-pre">
    		<code class="lang-html docs-markdown-code m-3">
    		<span class="hljs-tag">&lt;<span class="hljs-name">suku-heading</span>&gt;<span class="hljs-attr"> You just created suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-heading</span>&gt;</span>
    		<span class="hljs-tag">&lt;<span class="hljs-name">suku-heading color="#a7be2f" size="50"</span>&gt;<span class="hljs-attr"> You just modified suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-heading</span>&gt;</span>
    		</code>
    		</pre>
			`,
			codeSample: '<suku-heading> You just created suku-heading </suku-heading>',
			jsonSample: '',
			try: true,
			id: 1
		},
		{
			title: 'suku-sub-heading',
			description: `is used to help break up heading text.
   			 They improve the layout of a page and draw the attention of the readers.`,
			properties: this.Properties_DATA,
			mockSample: `<pre class="docs-markdown-pre">
    		<code class="lang-html docs-markdown-code m-3">
    		<span class="hljs-tag">&lt;<span class="hljs-name">suku-sub-heading</span>&gt;<span class="hljs-attr"> You just created suku-sub-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-sub-heading</span>&gt;</span>
        	<span class="hljs-tag">&lt;<span class="hljs-name">suku-sub-heading color="#a7be2f" size="50"</span>&gt;<span class="hljs-attr"> You just modified suku-sub-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-sub-heading</span>&gt;</span>
    		</code>
			</pre>`,
			codeSample: '<suku-sub-heading> You just created suku-sub-heading </suku-sub-heading>',
			jsonSample: '',
			try: true,
			id: 2
		},
		{
			title: 'suku-profile-widget',
			description: `represents the user profile which consists of name, account-type, and ratings.`,
			properties: this.Properties_DATA,
			mockSample: `<pre><code class="language-html f14" data-lang="html">
    		<span class="hljs-name">&lt;suku-profile-widget</span>  <span class="na">user-name=</span><span class="s">"Suku"</span> <span class="na">account-type=</span><span class="s">"Manufacturer"</span><span class="hljs-name">&gt;&lt;/suku-profile-widget&gt;</span>
					   </code></pre>`,
		   codeSample: '<suku-profile-widget  user-name="Suku" account-type="Manufacturer"></suku-profile-widget>',
			jsonSample: '',
			try: true,
			id: 3
		},
		{
		title: 'suku-rating-widget',
		description: `allows a user to submit a rating on a five-star scale.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-rating-widget</span>  <span class="na">comment-size=</span><span class="s">"16"</span> <span class="na">comment-color=</span><span class="s">"#b6b6b6"</span> <span class="hljs-name">&gt;&lt;/suku-rating-widget&gt;</span>
				   </code></pre>`,
	    codeSample: '<suku-rating-widget  comment-size="16" comment-color="#b6b6b6" ></suku-rating-widget>',
	    jsonSample: '',
	   try: true,
		id: 4
	},
	{
		title: 'suku-notification',
		description: `is to display the number of notifications for any provided cetegory.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-notification-widget</span>  <span class="na">id=</span><span class="s">"notification"</span> <span class="na">notification-title=</span><span class="s">"review bids"</span> <span class="na">notification-value=</span><span class="s">"0"</span><span class="hljs-name">&gt;
		&lt;/suku-notification-widget&gt;</span>
				   </code></pre>`,
	    codeSample: '<suku-notification-widget  id="notification" notification-title="review bids" notification-value="0"></suku-notification-widget>',
		jsonSample: '',
		try: true,
		id: 5
	},

	{
		title: 'suku-mail-widget',
		description: `provides a branded icon and email address link for the provided content.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-mail-widget</span> <span class="na">name=</span><span class="s">"dconway@suku.world"</span> <span class="na">size=</span><span class="s">"14"</span> <span class="na">color=</span><span class="s">"#3e3e3e"</span><span class="hljs-name">&gt;&lt;/suku-mail-widget&gt;</span>
				   </code></pre>`,
		codeSample: '<suku-mail-widget name="dconway@suku.world" size="14" color="#3e3e3e"></suku-mail-widget>',
		jsonSample: '',
		try: true,
		id: 6
	},
	{
		title: 'suku-bid-info',
		description: `shows the number of bids and the percentage fulfilled in a numerical form.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-bid-info</span> <span class="na">bids=</span><span class="s">"374"</span> <span class="na">percent=</span><span class="s">"10%"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">percent-heading=</span><span class="s">"fulfill"</span><span class="hljs-name">&gt;&lt;/suku-bid-info&gt;</span>
				   </code></pre>`,
	   codeSample: '<suku-bid-info bids="374" percent="10%" bid-heading="bids"  percent-heading="fulfill"></suku-bid-info>',
	   jsonSample: '',
	   try: true,
		id: 8
	},
	{
		title: 'suku-match-chip',
		description: `shows the user all the matching products that are available, including a title and expiration date.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-match-chip</span> <span class="na">list-name=</span><span class="s">"Super Computer"</span> <span class="na">prize=</span><span class="s">"10 SUKU"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">sell=</span><span class="s">"seller"</span><span class="na">sell-v=</span><span class="s">"John Smith"</span><span class="hljs-name">&gt;
		&lt;/suku-match-chip&gt;</span></code></pre>`,
		codeSample: '<suku-match-chip list-name="Super Computer" prize="10 SUKU" bid-heading="bids"  sell="seller"sell-v="John Smith"></suku-match-chip>',
		jsonSample: '',
		try: true,
		id: 9
	},
	{
		title: 'suku-card-line',
		description: `is used to display marketplace products and various statuses associated with them.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-card-line</span> <span class="na">title-one=</span><span class="s">"Super Computer"</span> <span class="na">msg-status =</span><span class="s">"read"</span> <span class="na">bg-color =</span><span class="s">"#ffffff"</span><span class="hljs-name">&gt;&lt;/suku-card-line&gt;</span>
				   </code></pre>`,
	    codeSample: '<suku-card-line title-one="Super Computer" msg-status ="read" bg-color ="#ffffff"></suku-card-line>',
	    jsonSample: '',
	    try: true,
		id: 10
	},
	{
		title: 'suku-dashboard-profile',
		description: `shows the profile of a user with various functionalities, such as creating new listing or new interest. The user can also review matches, negotiate purchases and various other functionalities.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-dashboard-profile</span> <span class="na">user-name=</span><span class="s">"Emery"</span> <span class="na">title-one=</span><span class="s">"CREATE NEW LISTING"</span><span class="hljs-name">&gt;
		&lt;/suku-dashboard-profile&gt;</span></code></pre>`,
		codeSample: '<suku-dashboard-profile user-name="Emery" title-one="CREATE NEW LISTING"></suku-dashboard-profile>',
		jsonSample: '',
		try: true,
		id: 11
	},
	{
		title: 'suku-nav-submenu',
		description: `provides a sub-navigation menu for more grainular navigation options.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-tag">&lt;<span class="hljs-name">suku-nav-submenu</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-nav-submenu</span>&gt;</span>
				   </code></pre>`,
	    codeSample: '<suku-nav-submenu></suku-nav-submenu>',
	    jsonSample: '',
	    try: true,
		id: 12
	},
	{
		title: 'suku-progress-bar',
		description: `shows a series of steps to complete a process, such as a listing creation.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-progress-bar</span> <span class="na">progress-style-one=</span><span class="s">"progressCompleted"</span> <span class="na"> heading-one=</span><span class="s">"first heading"</span><span class="hljs-name">&gt;&lt;/suku-progress-bar&gt;</span>
				   </code></pre>`,
	    codeSample: '<suku-progress-bar progress-style-one="progressCompleted"  heading-one="first heading"></suku-progress-bar>',
	    jsonSample: '',
	    try: true,
		id: 13
	},
	{
		title: 'suku-home-italic-heading',
		description: `displays italic heading text.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-tag">&lt;<span class="hljs-name">suku-home-italic-heading</span> <span class="na">size=</span><span class="s">"20"</span> &gt;<span class="hljs-attr"> You just created suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-home-italic-heading</span>&gt;</span>
				   </code></pre>`,
	    codeSample: '<suku-home-italic-heading size="20" > You just created suku-heading </suku-home-italic-heading>',
	    jsonSample: '',
	    try: true,
		id: 14
	},
	{
		title: 'suku-link',
		description: `provides a branded link to redirect a user.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-tag">&lt;<span class="hljs-name">suku-link</span><span class="na"> size=</span><span class="s">"14"</span>&gt;<span class="hljs-attr"> suku-link </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-link</span>&gt;</span>
				   </code></pre>`,
		 codeSample: '<suku-link size="14"> suku-link </suku-link>',
	    jsonSample: '',
	    try: true,
		id: 15
	},
	{
	title: 'suku-add-widget',
	description: `guides the end users to create a new item, such as a listing or interest.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-add-widget</span> <span class="na">size=</span><span class="s">"12"</span>&gt;<span class="hljs-attr">ADD NEW LISTING</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-add-widget</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-add-widget size="12">ADD NEW LISTING</suku-add-widget>',
	jsonSample: '',
	try: true,
	id: 16
},
{
	title: 'suku-select-input',
	description: `is used to give users a list of choices in a branded dropdown selector.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-select-input</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-select-input</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-select-input size="16" ></suku-select-input>',
    jsonSample: '',
	try: true,
	id: 17
},
{
	title: 'suku-phone-widget',
	description: `provides a branded icon and phone number for the provided content.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-phone-widget</span> <span class="na">number=</span><span class="s">"4806069863"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-phone-widget</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-phone-widget number="4806069863" ></suku-phone-widget>',
    jsonSample: '',
	try: true,
	id: 18
},
{
	title: 'suku-address-widget',
	description: `provides a branded icon and address for the provided content.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-address-widget</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr">ADD NEW LISTING</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-address-widget</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-address-widget size="16" >ADD NEW LISTING</suku-address-widget>',
    jsonSample: '',
    try: true,
	id: 19
},
{
	title: 'suku-inline-dropdown',
	description: `displays multiple selection options in a branded dropdown.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-inline-dropdown</span>&gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-inline-dropdown</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-inline-dropdown></suku-inline-dropdown>',
    jsonSample: '',
    try: true,
	id: 20
},
{
	title: 'suku-home-widget',
	description: `provides a branded link to redirect a user to the homepage.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-home-widget</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr">home widget</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-home-widget</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-home-widget size="16" >home widget</suku-home-widget>',
    jsonSample: '',
    try: true,
	id: 21
},
{
	title: 'suku-filter',
	description: `enables filtering of a list. It can either be active or inactive`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-filters</span> <span class="na">statusTypesDynamic=</span><span class="s">"InsertArrayHere"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-filter</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-filter statusTypesDynamic="InsertArrayHere" ></suku-filter>',
    jsonSample: '',
	try: false,
	id: 22
},
{
	title: 'suku-info-button',
	description: `is a branded button that is used to direct a user to detailed information.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-info-button</span>&gt;<span class="hljs-attr">Suku-info-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-info-button</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-info-button>Suku-info-button</suku-info-button>',
    jsonSample: '',
    try: true,
	id: 23
},
{
	title: 'suku-primary-button',
	description: `represents a branded "primary" button.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-primary-button</span>&gt;<span class="hljs-attr">Suku-primary-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-primary-button</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-primary-button>suku-primary-button</suku-primary-button>',
    jsonSample: '',
	try: true,
	id: 24
},
{
	title: 'suku-secondary-button',
	description: `represents a branded "secondary" button.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-secondary-button</span>&gt;<span class="hljs-attr">Suku-secondary-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-secondary-button</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-secondary-button>suku-secondary-button</suku-secondary-button>',
    jsonSample: '',
    try: true,
	id: 25
},
{
	title: 'suku-default-button',
	description: `represents a branded "default" button.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-default-button</span>&gt;<span class="hljs-attr">Suku-default-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-default-button</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-default-button>suku-default-button</suku-default-button>',
    jsonSample: '',
	try: false,
	id: 26
},
{
	title: 'suku-star-badge',
	description: `displays a branded badge with a start background.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-star-badge</span>&gt;<span class="hljs-attr"></span></span>5<span class="hljs-tag">&lt;/<span class="hljs-name">suku-star-badge</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-star-badge>5</suku-star-badge>',
    jsonSample: '',
	try: true,
	id: 27
},
{
	title: 'suku-search-input',
	description: `represents a search bar with an associated icon.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-search-input</span>&gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-search-input</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-search-input></suku-search-input>',
    jsonSample: '',
    try: true,
	id: 28
},
{
	title: 'suku-bid-tag',
	description: `displays a bid associated with products on the marketplace.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-bid-tag prize="$100"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-bid-tag</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-bid-tag prize="$100" ></suku-bid-tag>',
    jsonSample: '',
    try: true,
	id: 29
},
{
	title: 'suku-rating-star',
	description: `is used to display ratings between 1-5.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-rating-star</span> <span class="na">rating-value=</span><span class="s">"4"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-rating-star</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-rating-star rating-value="4" ></suku-rating-star>',
    jsonSample: '',
    try: true,
	id: 30
},
{
	title: 'suku-track-progress-bar',
	description: `displays the various steps to view a trace tree.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-track-progress-bar</span>&gt;</span><span class="hljs-tag"> &lt;/<span class="hljs-name">suku-track-progress-bar</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-track-progress-bar> </suku-track-progress-bar>',
    jsonSample: '',
    try: true,
	id: 31
},
{
	title: 'suku-product-trace-widget',
	description: `gelps users trace a product's details.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-track-progress-bar</span>&gt;</span><span class="hljs-tag"> &lt;/<span class="hljs-name">suku-track-progress-bar</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-product-trace-widget> </suku-product-trace-widget>',
    jsonSample: '',
    try: false,
	id: 32
},
{
	title: 'suku-tree',
	description: `represents the products in a parent/child hierarchy.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-tree</span>&gt;</span><span class="hljs-tag"> &lt;/<span class="hljs-name">suku-tree</span>&gt;</span>
			   </code></pre>`,
    codeSample: '<suku-tree [tree-data]="assign your data here"></suku-tree>',
    jsonSample: `<h4 class="text-grey">JSON-Sample: </h4><pre>[{
		_id: '5c45b8d37bccff62b4c83e4e',
		timestamp: '2019-01-21T11:41:31.921Z',
		children: [ 'Lx1002', 'Lx1003' ],
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
	}]</pre>`,
    try: true,
	id: 33
},
{
	title: 'suku-ach-setting',
	description: `represents ACH settings ui.`,
	properties: this.Properties_DATA,
	mockSample: ``,
    codeSample: '<suku-ach-setting></suku-ach-setting>',
    jsonSample: ``,
    try: true,
	id: 34
},
{
	title: 'suku-transaction-history',
	description: `displays a table of a user's transaction history.`,
	properties: this.Properties_DATA,
	mockSample: ``,
    codeSample: '<suku-transaction-history [headings]="insert your array headings here" [transactionDetails]="insert your array variable here"></suku-transaction-history>',
    jsonSample: ``,
    try: true,
	id: 35
},
{
	title: 'suku-dwolla-funding-agreement',
	description: 
`represents the funding agreement necessary to add a funding source. 
	
*In order to run this, please provide the formgroup name for form attribute i.e [form]="parent form name" and define formcontrolname in control attribute i.e control="{{insert your formcontrol name here}}. "(Submit)" is a eventemitter which defines the click action and provides form data."`,
	properties: this.Properties_DATA,
	mockSample: ``,
    codeSample: `<suku-dwolla-funding-agreement [form]="parentForm" control="checkAgreement" (submit)="submit($event)"></suku-dwolla-funding-agreement>`,
	jsonSample: ``,
    try: false,
	id: 36
},
{
	title: 'suku-beneficial-owner',
	description: 
`represents adding beneficial owners for the Dwolla onboarding process.

*In order run this, please provide the formgroup name for form attribute i.e [form]="parent form name" and define formArrayname in control attribute i.e control="{{insert your formcontrol name here}}. "(Submit)" is a eventemitter which defines the click action and provides form data.`,
	properties: this.Properties_DATA,
	mockSample: ``,
	codeSample: `<suku-beneficial-owner [form]="parentForm" formArrayName="owner" checkBoxId="owner" control="checkOwner" (submit)="submit($event)">
	</suku-beneficial-owner>`,
	jsonSample: `
	<pre>
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
	}
	</pre>`,
    try: false,
	id: 37
},
{
	title: 'suku-dwolla-funding-source',
	description: 
`represents a funding source that is attatched to a user's dwolla account.

Import Dwolla.js Library to run this:
<script src="https://cdn.dwolla.com/1/dwolla.js"></script>`,
	properties: this.Properties_DATA,
	mockSample: ``,
    codeSample: `<suku-dwolla-funding-source iav-token="4MTwIIvmwfq1jNttMrLrj7W0sxuE3cttpW56l4S4n8hJTiQoP4"></suku-dwolla-funding-source>`,
	jsonSample: ``,
    try: true,
	id: 38
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
				name: 'Suku-Dwolla Funding Agreement',
				id: 36
			},
			{
				name: 'Suku Beneficial owner',
				id: 37
			},
			{
				name: 'Suku-Dwolla Funding Source',
				id: 38
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
}
