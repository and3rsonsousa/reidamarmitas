import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto h-40" alt="" />
			</div>
			<div class="links">
				<a href="https://wa.me/5585996065623" class="link link-primary">
					Peça pelo WhatsApp
				</a>

				<a
					href="https://instagram.com/stories/reidasmarmita"
					class="link"
				>
					Veja o Cardápio de hoje{" "}
					<span class="uppercase text-xs tracking-wide">
						( nos stories )
					</span>
				</a>
				<a
					href="https://www.ifood.com.br/delivery/fortaleza-ce/rei-das-marmitas-cambeba/d6757bbf-69fd-47cd-a08e-449e29af2d98"
					class="link"
				>
					Peça pelo iFood
				</a>
				<div class="text-sm font-medium text-center">
					Ei vetim, dá 5 estrelinhas aqui no iFood, vai lá? 🤙🏾
				</div>
			</div>
			<div>
				<img src="/icon.png" class="w-16 mx-auto" alt="" />
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Rei das Marmitas - Peça a sua pelo nosso WhatsApp",
	meta: [
		{
			name: "description",
			content:
				"A melhor comida caseira de fortaleza. Não acredita? Experimenta pra tu ver!",
		},
	],
};
