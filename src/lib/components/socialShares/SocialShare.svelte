<script>
	import TwitterShare from './TwitterShare.svelte';
    import { score, user } from '../store.js';
    const title = "Annoying Child"
const content = "Jurassic quiz"
let socialImage = 'images/annoying_child_av.png'
    //what image do we want to show? Information? 
</script>

<TwitterShare
	text="A Twitter share button with progressive enhancement"
	url="https://svelte.dev/repl/98aa20d4cb3d40dabfef7d8dae183b85"
	via1="maxgraze"
    img = content
	via2="datacitron"
/>
<!-- <script>
import getShareImage from '@jlengstorf/get-share-image';


const socialImage = getShareImage({
  title: 'I just played this game',
  tagline: '#devops #nodejs #ssl',
  cloudName: 'dtlxnbia',
  imagePublicID: 'images/annoying_child_av.png',
  titleFont: 'futura',
  taglineFont: 'futura',
  textColor: '232129',
});

console.log(socialImage);

</script> -->

<div>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="image" content={socialImage} />
        <meta
          property="og:url"
          content={`https://datagrazing.com}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={socialImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maxgraze" />
        <meta name="twitter:creator" content="@maxgraze" />

    </div>    