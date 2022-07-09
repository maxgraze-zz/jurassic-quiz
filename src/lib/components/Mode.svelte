<div class="flex">
	<div class="bg-blackish text-cream w-5/12 h-96 text-center relative rounded-[150px]">
		<div class=" pt-16">
			<slot class=" font-janguky text-3xl pb-4" name="title">
				<h1 class=" font-janguky text-3xl pb-4">all <br />movies <br />included</h1>
			</slot>
			<slot name="movies">
				<p>
					Jurassic Park<br />
					The Lost World: Jurassic Park <br />
					Jurassic Park III <br />
					Jurassic World <br />
					Jurassic World: Fallen<br />
					Kingdom Jurassic World: Dominion
				</p>
			</slot>
		</div>
		<img src="/images/spoiler_star.png" alt="spoiler mode star" class="absolute -left-20 -top-14" />
	</div>
</div>
