import Script from "next/script";
import Hero from "@/components/Hero"; // adjust path as per your project structure

const YourPage = () => {
	return (
		<>
			<Hero title="Properties" />
			<Script id="tenant-turner-widget-script" strategy="beforeInteractive">
				{`
          try {
            window.tenantTurnerListingsWidget = {
              connection: { customer_id: 2312, user_id: null },
              environment: { root_path: "https://app.tenantturner.com" },
              tracking: {},
              options: {
                appearance__theme_color: "053149",
                appearance__map_enabled: 1,
                appearance__map_height: "800",
                appearance__map_width: "100",
                appearance__map_view: "show_listings_first",
                appearance__application_enabled: 1,
                appearance__application_display_type: "link",
                appearance__waitlist_enabled: 1,
                appearance__description_enabled: 1,
                search__search_enabled: 1,
                search__default_value: "",
                filter__filter_enabled: 1,
                filter__city_default_value: "",
                filter__state_default_value: "",
                filter__property_type_default_value: "",
                filter__bedrooms_default_value: "",
                filter__baths_default_value: "",
                filter__pets_default_value: "",
                sort__sort_enabled: 1,
                sort__default_value: "Most Recent"
              }
            };

            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = (window.tenantTurnerListingsWidget.environment.root_path
              ? window.tenantTurnerListingsWidget.environment.root_path + "/widget/widget.js"
              : "https://app.tenantturner.com/widget/widget.js");
            var x = document.getElementById("tenant-turner-widget-script");
            x.parentNode.insertBefore(s, x);
          } catch (err) {
            console.warn("TT widget error: " + err);
          }
        `}
			</Script>
			<div id="tenant-turner-widget-script"></div>
		</>
	);
};

export default YourPage;
