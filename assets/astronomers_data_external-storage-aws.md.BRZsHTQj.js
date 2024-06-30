import{_ as e,c as s,o as a,a3 as o,a4 as t,a5 as i,a6 as n,a7 as l,a8 as r,a9 as c,aa as h,ab as p,ac as d,ad as u,ae as k,af as g,ag as m,ah as E,ai as y,aj as _,ak as S,al as w,am as q}from"./chunks/framework.CN2TXM7E.js";const N=JSON.parse('{"title":"External Storage AWS","description":"","frontmatter":{},"headers":[],"relativePath":"astronomers/data/external-storage-aws.md","filePath":"astronomers/data/external-storage-aws.md"}'),b={name:"astronomers/data/external-storage-aws.md"},A=o('<h1 id="external-storage-aws" tabindex="-1">External Storage AWS <a class="header-anchor" href="#external-storage-aws" aria-label="Permalink to &quot;External Storage AWS&quot;">​</a></h1><p>To attach an Amazon AWS S3 bucket to your Arcsecond account, we recommend to create a specific IAM user with a dedicated read-only policy. This tutorial shows the complete procedure to do so. At the end, you will have to provide the well-known <code>AWS_ACCESS_KEY_ID</code>, <code>AWS_SECRET_ACCESS_KEY</code> as well as the bucket name and the AWS region for Arcsecond to parse your data.</p><p>We will guide you through the creation of a read-only policy, then that of a new IAM user, attaching the policy to it.</p><h2 id="create-a-read-only-s3-policy-for-your-bucket" tabindex="-1">Create a read-only S3 policy for your bucket <a class="header-anchor" href="#create-a-read-only-s3-policy-for-your-bucket" aria-label="Permalink to &quot;Create a read-only S3 policy for your bucket&quot;">​</a></h2><ol><li>To create a new IAM policy, login to your AWS console, and select the IAM service. You will end up in the IAM home page.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Arcsecond-specific information has been removed throughout the tutorial images.</p></div><p><img src="'+t+'" alt="Screenshot"></p><ol start="2"><li>Open the <code>Policies</code> page by clicking the link on the left-hand sidebar.</li></ol><p><img src="'+i+'" alt="Screenshot"></p><ol start="3"><li>Click the &quot;Create Policy&quot; button on the upper-right to start the short workflow of creating a new policies.</li></ol><p><img src="'+n+'" alt="Screenshot"></p><ol start="4"><li>Choose the <code>JSON</code> tab.</li></ol><p><img src="'+l+`" alt="Screenshot"></p><ol start="5"><li>Copy the following code and paste it as-is the actual content with it, <strong>except for the string <code>name-of-your-bucket</code> to be replaced with your own S3 bucket name</strong>. Note that you <strong>must</strong> have the two lines in the Resources section for the access to work.</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2012-10-17&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Statement&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Sid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;VisualEditor0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Action&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;s3:List*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;s3:Get*&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;arn:aws:s3:::name-of-your-bucket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;arn:aws:s3:::name-of-your-bucket/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="`+r+'" alt="Screenshot"></p><ol start="6"><li>Then click the &quot;Next: Tags&quot; button on the lower-right, to navigate to the Tags step.</li></ol><p><img src="'+c+'" alt="Screenshot"></p><ol start="7"><li>Optionally, give one or multiple tags to your policy (this has no effect nor impact on Arcsecond attachment). Then click the &quot;Next: Review&quot; button on the lower-right.</li></ol><p><img src="'+h+'" alt="Screenshot"></p><ol start="8"><li>Add a name and optionally a description to your policy. The click on the &quot;Create Policy&quot; button in the lower-right.</li></ol><p><img src="'+p+'" alt="Screenshot"></p><p>Your policy is now ready to be attached to a user.</p><h2 id="create-a-new-iam-user" tabindex="-1">Create a new IAM user <a class="header-anchor" href="#create-a-new-iam-user" aria-label="Permalink to &quot;Create a new IAM user&quot;">​</a></h2><ol><li>If not already done, login to your AWS console, and select the IAM service. You will end up in the IAM home page</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Arcsecond-specific information has been removed throughout the tutorial images.</p></div><p><img src="'+t+'" alt="Screenshot"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>AWS recommends to use an IAM <em>role</em> instead of a user to give access to third-party services like Arcsecond. However, the Arcsecond storage backend works only with <code>AWS_ACCESS_KEY_ID</code> and <code>AWS_SECRET_ACCESS_KEY</code>. Hence, the need to stick to the current procedure.</p></div><ol start="2"><li>Open the <code>Users</code> page by clicking the link on the left-hand sidebar.</li></ol><p><img src="'+d+'" alt="Screenshot"></p><ol start="3"><li>Click the &quot;Add users&quot; button on the upper-right to start the short workflow of creating a new users. And give a name to your new user. We recommend to <em>not</em> enable the console access. It is not needed by Arcsecond.</li></ol><p><img src="'+u+'" alt="Screenshot"></p><ol start="4"><li>When asked to attach permissions to the user, click the &quot;Attach policies directly&quot; button.</li></ol><p><img src="'+k+'" alt="Screenshot"></p><ol start="5"><li>Search for the policy you created above, and select it.</li></ol><p><img src="'+g+'" alt="Screenshot"></p><ol start="6"><li>Scroll down and click the &quot;Next&quot; button on the lower-right.</li></ol><p><img src="'+m+'" alt="Screenshot"></p><ol start="7"><li>Review that everything is fine, and click the &quot;Create user&quot; button on the lower-right.</li></ol><p><img src="'+E+'" alt="Screenshot"></p><ol start="8"><li>Your user is created! Click on either &quot;View User&quot; in the green banner, or in the user itself in the updated list.</li></ol><p><img src="'+y+'" alt="Screenshot"></p><ol start="9"><li>Select the &quot;Security credentials&quot; tab.</li></ol><p><img src="'+_+'" alt="Screenshot"></p><ol start="10"><li>Scroll down to reveal the &quot;Access Keys&quot; section. Click the &quot;Create access key&quot; button in the middle.</li></ol><p><img src="'+S+'" alt="Screenshot"></p><ol start="11"><li>As explained above, Arcsecond recommends not using access keys for third-party. Yet, Arcsecond only works with such keys for now. Select the checkbox &quot;I understand the above recommendation...&quot;</li></ol><p><img src="'+w+'" alt="Screenshot"></p><ol start="12"><li>Your access keys are created! <strong>Make sure to store them somewhere safe</strong>, you won&#39;t be able to retrieve them from Arcsecond. The first value is the <code>AWS_ACCESS_KEY_ID</code> and the second is the <code>AWS_SECRET_ACCESS_KEY</code>.</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>If you do not click the &quot;Show&quot; button to note the Secret key, and then leave that page, you won&#39;t be able to retrieve it from AWS. You will have to create new one from scratch.</p></div><p><img src="'+q+'" alt="Screenshot"></p><p>Click &quot;Done&quot;, and you&#39;re done! Now you can navigate to the Storages section of your Arcsecond settings, and attach your AWS storage.</p>',52),f=[A];function C(v,F,I,x,W,T){return a(),s("div",null,f)}const Y=e(b,[["render",C]]);export{N as __pageData,Y as default};